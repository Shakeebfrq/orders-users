const User = require('../modelss/model');
const Order = require('../modelss/order.model')

const getOrders = ('/:phoneNumber', async (req, res) => {
    try {
        const user = await User.findOne({ phoneNumber: req.params.phoneNumber });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const orders = await Order.find({ user: user._id });

        res.status(200).json({ user, orders });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const userDetails = ('/', async (req, res) => {
    try {
        
        const { name, phoneNumber, orderDetails } = req.body;


        const newUser = await User.create({
            name,
            phoneNumber,
        });

        
        const newOrder = await Order.create({
            user: newUser._id,
            orderDetails,
        });

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
                order: newOrder,
            },
        });
    } catch (error) {
        res.status(500).json({ status: 'Fail', message: error.message });
    }
});












module.exports = {getOrders,userDetails}



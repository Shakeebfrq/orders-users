const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/router')

const app = express();

const DB = "mongodb+srv://shakib:725943@cluster0.j97r4cw.mongodb.net/tours?retryWrites=true&w=majority"

mongoose.connect(DB)
.then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log("some error")
})

app.use(express.json());
app.use('/api/orders', router);


PORT= 3000;
app.listen(PORT,()=>{
    console.log("server running on port 3000")
})
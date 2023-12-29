const express = require('express');
const router = require('express').Router();
const {getOrders,userDetails} = require('..//controllers/controller')


router.get('/:phoneNumber',getOrders);

router.post('/signin', userDetails)


module.exports = router;



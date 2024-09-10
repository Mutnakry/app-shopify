

const express = require('express');
const { Orderproduct,Show_product_by_userlogin} = require('../controller/order.controller');
const router = express.Router();
router.post('/', Orderproduct);
router.get('/:id', Show_product_by_userlogin);

module.exports = router;

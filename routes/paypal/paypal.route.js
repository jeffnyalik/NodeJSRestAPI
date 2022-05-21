const express = require('express');
const router = express.Router();
const paypal = require('../../controllers/paypal/paypal.controller')


router.get('/', paypal.getPayPalInfo);
router.post('/pay', paypal.payMents);
router.get('/payment/success', paypal.successUrl);
router.get('/payment/cancel', paypal.cancelUrl);

module.exports = router;
const models = require('../../models');
const logger = require('../../logger');
const paypal = require('paypal-rest-sdk');
const path = require('path');


paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AV19-sjvmoataho3MiZyFMQr5ITZLr2PzwFD2LrVzKWne3OJvyfvHbwC3NIFrVVnoElTI0yRoXz-_Z7p',
    'client_secret':'EPnFINf-qfvD2PYRyumAeeqLdPudQK7OwAxrKA4yk2pW6thjjEuZfvBCWi-NmdpR_ulfRcCW5rxGkAZv'
});


/**
 * 
 * Paypal parameters
 * 
 */

 const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/api/payment/success",
        "cancel_url": "http://localhost:3000/api/payment/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "30.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "30.00"
        },
        "description": "This is the payment description."
    }]
};
 
/** */

const getPayPalInfo = ((req, res) =>{
    res.sendFile(path.join(__dirname, '../../index.html'));
    logger.info('Payment home url called');
});


const payMents = ((req, res) =>{
    paypal.payment.create(create_payment_json, (error, payment) =>{
        if(error){
            logger.error(error)
            throw error;
            
        }else{
            for (let i = 0; i < payment.links.length; i++){
                if(payment.links[i].rel === 'approval_url'){
                    res.redirect(payment.links[i].href);
                }
            }
        }
    })
});


const successUrl = ((req, res) =>{
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "30.00"
            }
        }]
      };
    
    paypal.payment.execute(paymentId, execute_payment_json, (err, payment) =>{
        if(err){
            console.log(err.response);
            logger.error(err)
            throw err
        }else{
            logger.info(JSON.stringify(payment));
            console.log(JSON.stringify(payment));
            res.sendFile(path.join(__dirname, '../../success.html'))
        }
    })
})

const cancelUrl = ((req, res) =>{
    res.sendFile(path.join(__dirname, '../../cancel.html'));
    logger.info('Payment has been canceled');
})

module.exports = {
    getPayPalInfo: getPayPalInfo,
    payMents: payMents,
    successUrl:successUrl,
    cancelUrl:cancelUrl
}
import services from './services';
import response from '../../../../helpers/response';
import "regenerator-runtime/runtime.js";
import db from '../../../../../database/models';
import breakDown from '../../../../../../businessConfig';
require('dotenv').config();

export const paymentNotifications = async (req, res) => {
    try {

        const hash = req.headers["verif-hash"];
        
        if(!hash) {
            // discard the request,only a post with the right Flutterwave signature header gets our attention
            return response(res, 400, '');
        }
        
        // Get signature stored as env variable on your server
        const secret_hash = process.env.MY_HASH;
        
        // check if signatures match
        if(hash !== secret_hash) {
        // silently exit, or check that you are passing the right hash on your server.
            return response(res, 400, '');
        }
        
        // Retrieve the request's body
        const requestBody = req.body;


        if (requestBody.event === 'charge.completed' && requestBody.data.status === 'successful') {
            // update payment table to make the transaction successful;
            const updatedPaymentForSellerMerchandise = await db.paymentForSeller.update({ status: 'successful' }, {
                where: {
                    txn_reference: requestBody.data.tx_ref
                }
            });

            const updatedPaymentForSellerActivation = await db.sellerActivationPayment.update({ status: 'successful' }, {
                where: {
                    txn_reference: requestBody.data.tx_ref
                }
            });
            // make the store active if the payment went through
            if (updatedPaymentForSellerActivation) {
                const paymentInfo = await db.paymentForSeller.findOne({where: {
                    txn_reference: requestBody.data.tx_ref
                }});
                console.log('paymentinfo >>>.', paymentInfo);
                const sellerActive = await db.seller.update({active: true}, {
                    where: {
                        id: paymentInfo.seller
                    }
                });
            }

            // carry out the breakdown
            if (updatedPaymentForSellerMerchandise) {
                // get payment info
                const paymentInfo = await db.paymentForSeller.findOne({where: {
                    txn_reference: requestBody.data.tx_ref
                }});
                console.log('payment info >>>>>>> ', paymentInfo.dataValues);
                // get seller info
                const sellerInfo = await db.seller.findOne({where: {
                    id: paymentInfo.seller,
                }});
                const breakdown = await db.breakDown.create({
                    paymentForSeller: paymentInfo.dataValues.id,
                    jumgaCommission: breakDown.jumgaCommission * (paymentInfo.amount - sellerInfo.dataValues.deliveryFee),
                    sellerProfit: breakDown.sellerProfit * (paymentInfo.amount - sellerInfo.dataValues.deliveryFee),
                    dispatchRiderCommission: breakDown.dispatch * sellerInfo.dataValues.deliveryFee,
                    jumgaDeliveryCommission: breakDown.jumgaDeliveryCommission * sellerInfo.dataValues.deliveryFee
                });
            }
        }
        

        return response(res, 200);
    } catch (error) {
        console.log(error);
        return response(res, 500, error);
    }
};
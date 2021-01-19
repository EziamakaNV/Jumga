import services from './services';
import response from '../../../../helpers/response';
import "regenerator-runtime/runtime.js";

export const payForMerchandise = async (req, res) => {
    try {
        const { customerEmail, sellerId, merchandiseId, currency } = req.body;
        const paymentLink = await services.generatePaymentLink(customerEmail, merchandiseId, currency);
        return response(res, 200, paymentLink);
    } catch (error) {
        return response(res, 500, error);
    }
};
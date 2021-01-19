import services from './services';
import response from '../../../../helpers/response';
import "regenerator-runtime/runtime.js";

export const createSeller = async (req, res) => {
    try {
        const { name, email } = req.body;
        const seller = await services.createSeller(name, email);
        return response(res, 201, seller);
    } catch (error) {
        console.log(error);
        return response(res, 500, error);
    }
};

export const activateSeller = async (req, res) => {
    try {
        const { sellerId, email } = req.body;
        const paymentLink = await services.activateSeller(sellerId, email);
        return response(res, 201, paymentLink);
    } catch (error) {
        console.log(error);
        return response(res, 500, error);
    }
};
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
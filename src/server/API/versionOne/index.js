import { Router } from 'express';
import seller from './modules/seller';
import merchandise from './modules/merchandise';
import webhook from './modules/webhook';
import db from '../../../database/models';
import response from '../../helpers/response';

const router = Router();

router.use('/seller', seller);
router.use('/merchandise', merchandise);
router.use('/webhook', webhook);
router.get('/paymentForSeller', async (req, res) => {
    try {
        const payments = await db.paymentForSeller.findAll();
        response(res, 200, payments);
    } catch (error) {
        response(res, 500, error);
    }
});
router.get('/merchandise', async (req, res) => {
    try {
        const merchandise = await db.merchandise.findAll();
        response(res, 200, merchandise);
    } catch (error) {
        response(res, 500, error);
    }
});
router.get('/breakDown', async (req, res) => {
    try {
        const breakDowns = await db.breakDown.findAll();
        response(res, 200, breakDowns);
    } catch (error) {
        response(res, 500, error);
    }
});
router.get('/dispatchRider', async (req, res) => {
    try {
        const dispatchRiders = await db.dispatchRider.findAll();
        response(res, 200, dispatchRiders);
    } catch (error) {
        response(res, 500, error);
    }
});
router.get('/sellerDispatch', async (req, res) => {
    try {
        const sellerDispatch = await db.sellerDispatch.findAll();
        response(res, 200, sellerDispatch);
    } catch (error) {
        response(res, 500, error);
    }
});
router.get('/sellerActivationPayment', async (req, res) => {
    try {
        const sellerActivationPayment = await db.sellerActivationPayment.findAll();
        response(res, 200, sellerActivationPayment);
    } catch (error) {
        response(res, 500, error);
    }
});


export default router;

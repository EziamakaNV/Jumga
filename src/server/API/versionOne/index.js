import { Router } from 'express';
import seller from './modules/seller';
import merchandise from './modules/merchandise';
import webhook from './modules/webhook';

const router = Router();

router.use('/seller', seller);
router.use('/merchandise', merchandise);
router.use('/webhook', webhook);


export default router;

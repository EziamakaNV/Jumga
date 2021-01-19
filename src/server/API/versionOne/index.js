import { Router } from 'express';
import seller from './modules/seller';
import merchandise from './modules/merchandise';

const router = Router();

router.use('/seller', seller);
router.use('/merchandise', merchandise);


export default router;

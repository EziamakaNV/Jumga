import { Router } from 'express';
import { payForMerchandise } from './controllers';

const router = Router();

router.post('/pay', payForMerchandise);

export default router;

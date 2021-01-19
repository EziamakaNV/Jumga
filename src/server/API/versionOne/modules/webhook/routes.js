import { Router } from 'express';
import { paymentNotifications } from './controllers';

const router = Router();

router.post('/payment', paymentNotifications);

export default router;

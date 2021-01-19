import { Router } from 'express';
import { createSeller, activateSeller } from './controllers';

const router = Router();

router.post('/', createSeller);
router.post('/activate', activateSeller);

export default router;

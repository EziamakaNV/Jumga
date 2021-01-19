import { Router } from 'express';
import { createSeller } from './controllers';

const router = Router();

router.post('/', createSeller);

export default router;

import { Router } from 'express';
import { createSeller, activateSeller } from './controllers';
import db from '../../../../../database/models';
import response from '../../../../helpers/response';

const router = Router();

router.post('/', createSeller);
router.post('/activate', activateSeller);
router.get('/', async (req, res) => {
    try {
        const sellers = await db.seller.findAll();
        response(res, 200, sellers);
    } catch (error) {
        response(res, 500, error);
    }
})

export default router;

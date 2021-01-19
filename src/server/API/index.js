import { Router } from 'express';
import versionOne from './versionOne/index';

const router = Router();

router.use('/v1', versionOne);


export default router;

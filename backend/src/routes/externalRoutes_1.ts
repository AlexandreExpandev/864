import { Router } from 'express';
import * as numberController from '../api/external/public/number/controller';

const router = Router();

// Public routes
router.get('/number/list', numberController.getHandler);
router.get('/number/convert/:number', numberController.convertHandler);

export default router;

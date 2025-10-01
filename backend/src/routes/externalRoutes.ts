import { Router } from 'express';
import * as numberController from '../api/external/public/number/controller';

const router = Router();

// Public routes
router.use('/public', Router()
  .get('/numbers', numberController.getHandler)
);

export default router;

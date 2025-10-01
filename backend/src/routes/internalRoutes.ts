import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Protected routes - add your authenticated routes here
// Example: router.get('/resource', authMiddleware, controller.handler);

export default router;

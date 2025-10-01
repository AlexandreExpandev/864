import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Protected routes - require authentication
router.use(authMiddleware);

// Add internal routes here when needed

export default router;

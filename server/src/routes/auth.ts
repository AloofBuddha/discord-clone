import { Router } from 'express';
import { register, login, getProfile, getUsers } from '../controllers/auth';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authenticateToken, getProfile);

// Debug route (remove in production)
router.get('/users', getUsers);

export default router;
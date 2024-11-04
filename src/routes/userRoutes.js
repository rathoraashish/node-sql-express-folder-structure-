import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';
import { validateUser } from '../validations/userValidation.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/', validateUser, createUser);

export default router;

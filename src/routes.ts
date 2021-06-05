import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

import authMiddelware from './middlewares/authMiddleware';


const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.auth);
router.get('/users',authMiddelware, UserController.index);


export default router
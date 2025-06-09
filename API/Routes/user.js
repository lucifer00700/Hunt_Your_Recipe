import express from 'express'
import { register,login, profile } from '../Controllers/user.js';
import { Authenticate } from '../middlewares/auth.js';


const router = express.Router();

router.post('/register',register)

router.post('/login',login)

router.get('/user',Authenticate,profile)

export default router
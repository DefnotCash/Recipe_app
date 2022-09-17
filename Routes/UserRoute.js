import express from 'express';
import { loginUser, signUp, createUser, deleteUser, getAllUsers, getUsers, updateUser } from '../Controllers/UserController.js';
import verifytoken from '../middleware/authmiddle.js'

const router = express.Router();

router.get('/', getAllUsers);
router.get('/users', getUsers);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.post('/signup', verifytoken, signUp) ;
router.post('/login', verifytoken, loginUser);

export default router;
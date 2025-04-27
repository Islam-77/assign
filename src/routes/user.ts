import express, { Router } from 'express';
import { addUser, deleteUser, getAllUsers, getUserById } from '../modules/user';
import { validateUserData } from '../middlewares/user';

const router: Router = express.Router();


router.get('/users', getAllUsers);


router.post('/users', validateUserData, addUser);


router.get('/users/:id', getUserById);


router.delete('/users/:id', deleteUser);

export default router;
import express, { Router } from 'express';
import { addUserInterest, getUserInterests } from '../modules/interests';

const router: Router = express.Router();


router.post('/interests/users/:userId', addUserInterest);


router.get('/interests/users/:userId', getUserInterests);

export default router;
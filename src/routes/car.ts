import express, { Router } from 'express';
import { getAllCars, addCar, deleteCar, getCarById } from '../modules/car';
import { validateCarData } from '../middlewares/car';

const router: Router = express.Router();


router.get('/cars', getAllCars);


router.post('/cars', validateCarData, addCar);


router.delete('/cars/:id', deleteCar);


router.get('/cars/:id', getCarById);

export default router;


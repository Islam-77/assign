import { Request, Response } from "express";
import { Car } from "../types/car";


const cars: Car[] = [];


export const getAllCars = (req: Request, res: Response): void => {
  res.status(200).json({ cars });
};


export const addCar = (req: Request, res: Response): void => {
  const { brand, model, class: carClass } = req.body;
  
  const newCar: Car = {
    brand,
    model,
    class: carClass
  };
  
  cars.push(newCar);
  
  res.status(201).json({ 
    message: "Car added successfully", 
    car: newCar,
    id: cars.length - 1
  });
};


export const deleteCar = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id) || id < 0 || id >= cars.length) {
    res.status(404).json({ error: "Car not found" });
    return;
  }
  
  const deletedCar = cars.splice(id, 1)[0];
  
  res.status(200).json({ 
    message: "Car deleted successfully", 
    car: deletedCar 
  });
};


export const getCarById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id) || id < 0 || id >= cars.length) {
    res.status(404).json({ error: "Car not found" });
    return;
  }
  
  res.status(200).json({ car: cars[id] });
};


export const getCarsArray = () => cars;
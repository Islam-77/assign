import { Request, Response } from "express";
import { Interests } from "../types/interests";
import { getUsersArray } from "./user";
import { getCarsArray } from "./car";
import { Car } from "../types/car";


const interests: Interests[] = [];


export const addUserInterest = (req: Request, res: Response): void => {
  const userId = parseInt(req.params.userId);
  const { carId } = req.body;
  
  const users = getUsersArray();
  const cars = getCarsArray();
  
  
  if (isNaN(userId) || userId < 0 || userId >= users.length) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  
  
  if (isNaN(carId) || carId < 0 || carId >= cars.length) {
    res.status(404).json({ error: "Car not found" });
    return;
  }
  
  
  let userInterests = interests.find(interest => interest.user === users[userId]);
  
  if (!userInterests) {
    
    userInterests = {
      user: users[userId],
      cars: []
    };
    interests.push(userInterests);
  }
  
  
  const carExists = userInterests.cars.some(car => car === cars[carId]);
  
  if (!carExists) {
    userInterests.cars.push(cars[carId]);
  }
  
  res.status(200).json({ 
    message: "Interest added successfully",
    interests: userInterests
  });
};


export const getUserInterests = (req: Request, res: Response): void => {
  const userId = parseInt(req.params.userId);
  const users = getUsersArray();
  
  
  if (isNaN(userId) || userId < 0 || userId >= users.length) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  
  
  const userInterests = interests.find(interest => interest.user === users[userId]);
  
  if (!userInterests) {
    res.status(200).json({ interests: { user: users[userId], cars: [] } });
    return;
  }
  
  res.status(200).json({ interests: userInterests });
};
import { Request, Response, NextFunction } from "express";
import { CarClass } from "../types/car";


export const validateCarData = (req: Request, res: Response, next: NextFunction): void => {
  const { brand, model, class: carClass } = req.body;
  

  if (!brand || !model || !carClass) {
    res.status(400).json({ 
      error: "Missing required fields. 'brand', 'model', and 'class' are required." 
    });
    return;
  }
  

  if (typeof brand !== 'string' || typeof model !== 'string') {
    res.status(400).json({ 
      error: "Brand and model must be strings." 
    });
    return;
  }
  

  const validClasses: CarClass[] = ['A', 'B', 'C'];
  if (!validClasses.includes(carClass as CarClass)) {
    res.status(400).json({ 
      error: "Car class must be one of: 'A', 'B', or 'C'." 
    });
    return;
  }
  
  next();
};
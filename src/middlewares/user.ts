import { Request, Response, NextFunction } from "express";


export const validateUserData = (req: Request, res: Response, next: NextFunction): void => {
  const { name, age } = req.body;
  
  if (!name) {
    res.status(400).json({ 
      error: "Missing required field. 'name' is required." 
    });
    return;
  }
  
  if (typeof name !== 'string') {
    res.status(400).json({ 
      error: "Name must be a string." 
    });
    return;
  }
  
  if (typeof age !== 'number' || age < 0) {
    res.status(400).json({ 
      error: "Age must be a positive number." 
    });
    return;
  }
  
  next();
};
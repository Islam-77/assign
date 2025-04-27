import { Request, Response } from "express";
import { User } from "../types/user";


const users: User[] = [];


export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json({ users });
};


export const addUser = (req: Request, res: Response): void => {
  const { name, age } = req.body;
  
  const newUser: User = {
    name,
    age
  };
  
  users.push(newUser);
  
  res.status(201).json({ 
    message: "User added successfully", 
    user: newUser,
    id: users.length - 1
  });
};


export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id) || id < 0 || id >= users.length) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  
  res.status(200).json({ user: users[id] });
};


export const deleteUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id) || id < 0 || id >= users.length) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  
  const deletedUser = users.splice(id, 1)[0];
  
  res.status(200).json({ 
    message: "User deleted successfully", 
    user: deletedUser 
  });
};


export const getUsersArray = () => users;
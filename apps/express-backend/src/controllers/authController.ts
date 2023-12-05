// src/controllers/authController.ts

import { Request, Response } from 'express';
import { authService } from '../services/authService';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await authService.registerUser(username, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const token = await authService.loginUser(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: 'Invalid username or password' });
  }
};

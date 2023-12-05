// src/services/authService.ts

import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { bcryptUtils } from '../utils/bcryptUtils';

const userRepository = getRepository(User);

export const registerUser = async (username: string, password: string): Promise<User> => {
  const hashedPassword = await bcryptUtils.hashPassword(password);

  const newUser = userRepository.create({
    username,
    password: hashedPassword,
  });

  return userRepository.save(newUser);
};

export const loginUser = async (username: string, password: string): Promise<string> => {
  const user = await userRepository.findOne({ username });

  if (!user || !(await bcryptUtils.comparePassword(password, user.password))) {
    throw new Error('Invalid username or password');
  }

  // Generate and return a token (you may use libraries like jsonwebtoken)
  // For this example, we skip the token generation process
  return 'generated_token';
};

// src/utils/bcryptUtils.ts

import bcrypt from 'bcryptjs';

export const bcryptUtils = {
  hashPassword: (password: string): Promise<string> => bcrypt.hash(password, 10),
  comparePassword: (password: string, hashedPassword: string): Promise<boolean> => bcrypt.compare(password, hashedPassword),
};

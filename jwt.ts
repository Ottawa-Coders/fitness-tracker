// utils/jwt.ts
import jwt, { SignOptions } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'; // Use an environment variable for the secret key

interface UserPayload {
  userId: string;
  username: string;
}

export const signToken = (payload: UserPayload, options?: SignOptions): string => {
  return jwt.sign(payload, SECRET_KEY, options);
};

export const verifyToken = (token: string): UserPayload => {
  try {
    return jwt.verify(token, SECRET_KEY) as UserPayload;
  } catch (err) {
    throw new Error('Invalid token');
  }
};
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

export type UserPayload = {
    userId: string;
    username: string;
}

export const authenticateToken = (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        next(user as UserPayload); // Attach user to request object
    });
};
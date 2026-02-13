import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../utils/config';
import { logger } from '../utils/logger';

interface JwtPayload {
  userId: string;
  email: string;
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }

    const decoded = jwt.verify(token, config.jwt.secret) as JwtPayload;
    
    // Add user info to request
    (req as any).userId = decoded.userId;
    (req as any).userEmail = decoded.email;
    (req as any).username = decoded.username;
    
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
    
    logger.error('Auth middleware error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const optionalAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return next(); // Continue without user info
    }

    const decoded = jwt.verify(token, config.jwt.secret) as JwtPayload;
    
    // Add user info to request if token is valid
    (req as any).userId = decoded.userId;
    (req as any).userEmail = decoded.email;
    (req as any).username = decoded.username;
    
    next();
  } catch (error) {
    // Continue without user info if token is invalid
    next();
  }
};
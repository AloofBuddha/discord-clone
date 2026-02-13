import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { config } from '../utils/config';
import { logger } from '../utils/logger';

// Temporary in-memory storage (will replace with database when Prisma is working)
const users: Array<{
  id: string;
  email: string;
  username: string;
  password: string;
  avatar?: string;
  status: string;
  createdAt: Date;
}> = [];

let userIdCounter = 1;

export const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;

    // Validation
    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email, username, and password are required'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // Check if user exists
    const existingUser = users.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = {
      id: `user_${userIdCounter++}`,
      email,
      username,
      password: hashedPassword,
      avatar: undefined,
      status: 'offline',
      createdAt: new Date()
    };

    users.push(newUser);

    // Generate JWT
    // @ts-ignore - JWT typing issue, but works correctly at runtime
    const token = jwt.sign(
      { 
        userId: newUser.id, 
        email: newUser.email,
        username: newUser.username 
      },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    );

    logger.info(`User registered: ${newUser.username} (${newUser.email})`);

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
          avatar: newUser.avatar,
          status: newUser.status
        },
        token
      }
    });
  } catch (error) {
    logger.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT
    // @ts-ignore - JWT typing issue, but works correctly at runtime
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        username: user.username 
      },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    );

    // Update status to online (in real app, would be handled by socket connection)
    user.status = 'online';

    logger.info(`User logged in: ${user.username} (${user.email})`);

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          status: user.status
        },
        token
      }
    });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          status: user.status,
          createdAt: user.createdAt
        }
      }
    });
  } catch (error) {
    logger.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Debug endpoint to see all users (remove in production)
export const getUsers = async (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      users: users.map(u => ({
        id: u.id,
        email: u.email,
        username: u.username,
        status: u.status,
        createdAt: u.createdAt
      }))
    }
  });
};
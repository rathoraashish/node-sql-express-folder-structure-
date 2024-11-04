import userService from '../services/userService.js';
import { handleError } from '../utils/errorHandler.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    handleError(res, error);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    handleError(res, error);
  }
};

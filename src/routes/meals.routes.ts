import express from 'express';
import { registerMeal } from '../controllers/meal.controller';

const router = express.Router();

router.post('/register', registerMeal);

// Docs
/**
   * @swagger
   * /register:
   *   post:
   *     description: Register a new meals
   *     responses:
   *       200:
   */
export default router;

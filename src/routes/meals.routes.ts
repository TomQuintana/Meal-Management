import express from 'express';
import { obtainMeals, registerMeal, updatedMeal } from '../controllers/meal.controller';

const router = express.Router();

router.post('/register', registerMeal);
router.get('/all', obtainMeals);
router.put('/update/:id', updatedMeal);

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

import express from 'express';
import { obtainMeals, registerMeal, updatedMeal, deleteMeals } from '../controllers/meal.controller';

const router = express.Router();

router.post('/register', registerMeal);
router.get('/all', obtainMeals);
router.put('/update/:id', updatedMeal);
router.delete('/delete/:id', deleteMeals);

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

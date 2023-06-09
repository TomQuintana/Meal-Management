import { Request, Response } from 'express';
import mealModel from '../models/meal.model';

const registerMeal = (req: Request, res: Response) => {
  console.log(req.body );

  const mealData = new mealModel(req.body);
  console.log(mealData);
  
  
  res.json({
    msg: 'register meal'
  });
};

export {
  registerMeal
};

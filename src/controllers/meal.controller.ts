import { Request, Response } from 'express';
import Meal from '../models/meal.model';
import { isValidCategory } from '../helpers/mealsHelper';

const registerMeal = async (req: Request, res: Response) => {
  const {name} = req.body; 
  const mealData = new Meal(req.body);

  const existName = await Meal.findOne({name}); 
   
  if (existName) {
    return res.status(400).json({
      msg: `Name: ${name}, is already register`
    });  
  }

  const validationCategory = isValidCategory(mealData.category);
    
  if (!validationCategory) {
    return res.status(400).json({
      msg: 'Invalid category'
    });  
  }

  try {
    const mealSave = await mealData.save();
    return res.status(200).json({
      mealSave
    });
    
  } catch (error) {
    res.status(500).json({ 
      error: 'An internal server error occurred.'
    });
  }
  
};

// updated 

// deleted

// get all

// filters

// list of future buy

export {
  registerMeal
};

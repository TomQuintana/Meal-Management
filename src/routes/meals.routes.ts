import express, { Router } from 'express';
import { test } from '../controllers/meal.controller';

const router = express.Router();

router.get('/register', test);

export default router;

import { Schema, model } from 'mongoose';

const MealSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  stock : { 
    type: Number, 
    required: true },
  use: {
    type: Boolean,
    default: false
  },
  bowl: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now(),
  }, 
});

export default model('MealModel', MealSchema);

import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  category: string;
  stock: number;
  use?: boolean;
  bowl?: string;
  date?: Date;
}

const MealSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: true 
  },
  category: { 
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
    default: Date.now().toFixed(),
  }, 
});

export default model('Meals-Stored', MealSchema);

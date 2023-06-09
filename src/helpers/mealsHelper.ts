
const isValidCategory = (category: string): boolean => {
  const validCategory = ['food', 'Meal', 'ingredient'];

  if (validCategory.includes(category)) {
    return true;
  }

  return false;
};


export {
  isValidCategory,
};

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  purchasing: false,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  const updatedIngredient = updateObject({
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  });
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };

  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = updateObject({
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  });
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject({
    state,
    ingredients: action.ingredients,
    error: false,
    totalPrice: 4,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject({
    state,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return{
        type: actionTypes.ADD_INGREDIENT,   
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,   
        ingredientName: name
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios
        .get("https://react-my-burger-5be15.firebaseio.com/ingredients.json")
        .then((response) => {
          this.setState({ ingredients: response.data });
        })
        .catch((error) => {});
    };
};
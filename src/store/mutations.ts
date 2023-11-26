import { Ingredient, Meal } from "../types"
import { AppState } from "./state"

export const SET_MEAL_MUTATION = 'setMeal'
export const SET_SEARCH_MEALS_MUTATION = 'setSearchMeals'
export const SET_SEARCH_MEALS_BY_LETTER_MUTATION = 'setSearchMealsByLetter'
export const SET_SEARCH_MEALS_BY_INGREDIENT_MUTATION = 'setSearchMealsByIngredient'
export const SET_INGREDIENTS_MUTATION = 'setIngredients'

function setMeal(state: AppState, meal: Meal) {
  state.meal = meal
}

function setSearchMeals(state: AppState, meals: Meal[]) {
  state.searchedMeals = meals
}

function setSearchMealsByLetter(state: AppState, meals: Meal[]) {
  state.searchedMealsByLetter = meals
}

function setSearchMealsByIngredient(state: AppState, meals: Meal[]) {
  state.searchedMealsByIngredient = meals
}

function setIngredients(state: AppState, ingredients: Ingredient[]) {
  state.ingredients = ingredients
}

export default {
  setMeal,
  setSearchMeals,
  setSearchMealsByLetter,
  setSearchMealsByIngredient,
  setIngredients
}
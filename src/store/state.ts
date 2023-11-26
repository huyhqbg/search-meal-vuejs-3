import { Ingredient, Meal } from "../types"

export type AppState = {
  meal?: Meal
  searchedMeals?: Meal[]
  searchedMealsByLetter?: Meal[]
  ingredients?: Ingredient[]
  searchedMealsByIngredient?: Meal[]
}

const state: AppState = {
  meal: undefined,
  searchedMeals: undefined,
  searchedMealsByLetter: undefined,
  ingredients: undefined,
  searchedMealsByIngredient: undefined
}

export default state
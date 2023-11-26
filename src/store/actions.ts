import { ActionContext } from "vuex";
import axiosClient from "../axiosClient";
import { IngredientRes, MealsRes } from "../types";
import {
  SET_INGREDIENTS_MUTATION,
  SET_MEAL_MUTATION,
  SET_SEARCH_MEALS_BY_INGREDIENT_MUTATION,
  SET_SEARCH_MEALS_BY_LETTER_MUTATION,
  SET_SEARCH_MEALS_MUTATION
} from "./mutations";

export const GET_MEAL_ACTION = 'getMeal'
export const SEARCH_MEALS_ACTION = 'searchMeals'
export const SEARCH_MEALS_BY_LETTER_ACTION = 'searchMealsByLetter'
export const SEARCH_MEALS_BY_INGREDIENT_ACTION = 'searchMealsByIngredient'
export const GET_INGREDIENTS_ACTION = 'getIngredients'

async function getMeal({ commit }: ActionContext<{}, {}>, id: string) {
  const res = await axiosClient.get<MealsRes>(`lookup.php?i=${id}`)
  commit(SET_MEAL_MUTATION, res?.data?.meals?.[0])
}

async function searchMeals({ commit }: ActionContext<{}, {}>, keyword: string) {
  const res = await axiosClient.get<MealsRes>(`search.php?s=${keyword}`)
  commit(SET_SEARCH_MEALS_MUTATION, res?.data?.meals)
}

async function searchMealsByLetter({ commit }: ActionContext<{}, {}>, letter: string) {
  const res = await axiosClient.get<MealsRes>(`search.php?f=${letter}`)
  commit(SET_SEARCH_MEALS_BY_LETTER_MUTATION, res?.data?.meals)
}

async function searchMealsByIngredient({ commit }: ActionContext<{}, {}>, payload: string) {
  const res = await axiosClient.get<IngredientRes>(`filter.php?i=${payload}`)
  commit(SET_SEARCH_MEALS_BY_INGREDIENT_MUTATION, res?.data?.meals)
}

async function getIngredients({ commit }: ActionContext<{}, {}>) {
  const res = await axiosClient.get<IngredientRes>(`list.php?i=list`)
  commit(SET_INGREDIENTS_MUTATION, res?.data?.meals)
}

export default {
  getMeal,
  searchMeals,
  searchMealsByLetter,
  searchMealsByIngredient,
  getIngredients
}
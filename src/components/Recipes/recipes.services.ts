import { getRecipesDataByArea } from "../../api/recipes.api";
import type {Meals, RawMealSummary } from "../../DTO/Response/MealsResponse"


const transformMeal = (meal: RawMealSummary): Meals => ({
  mealId: meal.idMeal,
  mealName: meal.strMeal,
  mealThumbnailUrl: meal.strMealThumb,
  country : meal.strCountry
});

export const getRecipesByArea = async(area : string) :Promise<Meals[]> => {
    const rawData  = await getRecipesDataByArea(area);
    return (rawData.meals || []).map((data : RawMealSummary)  => transformMeal(data));

}



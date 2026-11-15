export interface RawMealsApiResponse {
  meals: RawMealSummary[] | null;
}

export interface RawMealSummary {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strArea: string;
  strCountry: string;
};


export interface Meals {
    mealName : string;
    mealId : string;
    mealThumbnailUrl : string;
    country: string;
}
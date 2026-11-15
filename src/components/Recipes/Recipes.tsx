import { Box, Grid, Typography } from "@mui/material";
import { RecipeCard, type RecipeCardProps } from "./RecipeCard";
import { useEffect, useState } from "react";
import type { Meals } from "../../DTO/Response/MealsResponse";
import { getRecipesByArea } from "./recipes.services";
import { useCuisinePreference } from "../UserCuisinePreference/UserCuisinePreference";

export function Recipes() {

  const [meals, setMeal] = useState<Meals[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { preference } = useCuisinePreference();


  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const loadData = async () => {
      try {
        const meals = await getRecipesByArea(preference);
        if (isMounted) {
          setMeal(meals);
          setIsLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setIsLoading(false);
          console.error(err);
        }
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, [preference]);


  return isLoading ? <Box></Box> :
    meals && meals.length > 0 ?
      (
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2.5}>
            {
              meals.map((meal) => (
                <RecipeCard name={meal.mealName} image={meal.mealThumbnailUrl} cuisine={meal.country}></RecipeCard>
              ))
            }
          </Grid>
        </Box>
      ) :
      <Box>
        <Typography variant="body1">No Data Found</Typography>

      </Box>
}
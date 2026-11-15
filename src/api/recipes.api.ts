import axios from "axios";
import type { RawMealsApiResponse} from "../DTO/Response/MealsResponse";


const baseApi = 'https://themealdb.com/api/json/v1/1';

export const getRecipesDataByArea = async (area: string) : Promise<RawMealsApiResponse> => {
  try {
    const response = await axios.get(`${baseApi}/filter.php`, {
      params: {
        a: area 
      }
    });
    
    return response.data; 
  } catch (error) {
    console.error('Error fetching recipes by area:', error);
    throw error;
  }
};
// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

import { useEffect, useState } from "react";
import axios from "axios";


interface MealData {
    idMeal: string; 
    strMeal	: string; 
    strDrinkAlternate: string; 
    strCategory: string; 
    strArea: string; 
    strInstructions: string; 
    strMealThumb: string; 
    strYoutube: string; 
    strIngredient1: string; 
    strIngredient2: string; 
    strIngredient3: string; 
    strIngredient4: string; 
    strIngredient5: string; 
    strIngredient6: string; 
    strIngredient7: string; 
    strIngredient8: string; 
    strIngredient9: string; 
    strIngredient10: string; 
    strIngredient11: string; 
    strIngredient12: string; 
    strIngredient13: string; 
    strIngredient14: string; 
    strIngredient15: string; 
    strIngredient16: string; 
    strIngredient17: string; 
    strIngredient18: string; 
    strIngredient19: string; 
    strIngredient20: string; 
    strMeasure1: string; 
    strMeasure2: string; 
    strMeasure3: string; 
    strMeasure4: string; 
    strMeasure5: string; 
    strMeasure6: string; 
    strMeasure7: string; 
    strMeasure8: string; 
    strMeasure9: string; 
    strMeasure10: string; 
    strMeasure11: string; 
    strMeasure12: string; 
    strMeasure13: string; 
    strMeasure14: string; 
    strMeasure15: string; 
    strMeasure16: string; 
    strMeasure17: string; 
    strMeasure18: string; 
    strMeasure19: string; 
    strMeasure20: string; 
    strSource: string; 
    strImageSource: string; 
    strCreativeCommonsConfirmed: string; 
    dateModified: string 
  }

const API_SOURCE_1 = "https://www.themealdb.com/api/json/v1/1/random.php";

const AxiosOutput = () => {
//   const [meals, setMeals] = useState([]);
  const [meals, setMeals] = useState(Array<MealData>);

//   MealData
  useEffect(() => {
    axios
      .get(API_SOURCE_1)
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  return (
    <div>
      {meals.map((meal) => (
        <img
          key={meal.idMeal}
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={400}
        />
      ))}
    </div>
  );
};

export default AxiosOutput;
// sources
// [A1]: https://www.google.com/search?q=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&client=firefox-b-1-d&sca_esv=45d74a8068dcbd28&ei=bCUkZ8aXJpqkiLMPktWVwQ4&ved=0ahUKEwjG_bLg9LmJAxUaEmIAHZJqJegQ4dUDCBA&uact=5&oq=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&gs_lp=Egxnd3Mtd2l6LXNlcnAiQ3VzZSBhIGZsYWcgaW4gcmVhY3RqcyB0byBkZXRlcm1pbmUgd2hlbiBkYXRhIGhhcyBsb2FkZWQgZnJvbSBhbiBBUElItGxQsAlY_GlwAXgCkAEAmAGuAaABgTqqAQUyOS4zObgBA8gBAPgBAZgCP6AC5DXCAgQQABhHwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiDAcICBRAuGIAEwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBjRAxjHAcICDRAAGIAEGLEDGEMYigXCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYyQPCAgsQABiABBiSAxiKBcICCBAAGIAEGLEDwgIFEAAYgATCAggQABgWGB4YD8ICBhAAGBYYHsICCBAAGBYYChgewgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAhGKABwgIFECEYnwXCAgcQIRigARgKwgIFECEYqwLCAggQABiiBBiJBZgDAOIDBRIBMSBAiAYBkAYIkgcFMTkuNDSgB5G6Aw&sclient=gws-wiz-serp

import React, { useState, useEffect } from 'react';

const API_SOURCE_1 = "http://localhost:3000/sendcomponent";

const API_SOURCE_2 = "https://www.themealdb.com/api/json/v1/1/random.php";


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

function MyComponent() {
  const [data, setData] = useState(null);
  const [myStr, setMyStr] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState(Array<MealData>);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching

      try {
        const response = await fetch(API_SOURCE_2);
        const result = await response.json();

        const theString = JSON.stringify(result.meals);
        setMyStr(theString);
        setMeals(result.meals);
        // idMeal

        setData(result);
        // setData(result[0].strMeal);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching, regardless of success or failure
      }
    };

    fetchData(); 
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Display a loading message while data is being fetched
      ) : (
        <div>
          {/* Display the data once it's loaded */}
          {/* {data.strMeal} */}
          {meals[0].strMeal}
          {/* {myStr} */}
        </div>
      )}
    </div>
  );
}

export default MyComponent;
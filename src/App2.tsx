// sources
// [A1]: https://www.google.com/search?q=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&client=firefox-b-1-d&sca_esv=45d74a8068dcbd28&ei=bCUkZ8aXJpqkiLMPktWVwQ4&ved=0ahUKEwjG_bLg9LmJAxUaEmIAHZJqJegQ4dUDCBA&uact=5&oq=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&gs_lp=Egxnd3Mtd2l6LXNlcnAiQ3VzZSBhIGZsYWcgaW4gcmVhY3RqcyB0byBkZXRlcm1pbmUgd2hlbiBkYXRhIGhhcyBsb2FkZWQgZnJvbSBhbiBBUElItGxQsAlY_GlwAXgCkAEAmAGuAaABgTqqAQUyOS4zObgBA8gBAPgBAZgCP6AC5DXCAgQQABhHwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiDAcICBRAuGIAEwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBjRAxjHAcICDRAAGIAEGLEDGEMYigXCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYyQPCAgsQABiABBiSAxiKBcICCBAAGIAEGLEDwgIFEAAYgATCAggQABgWGB4YD8ICBhAAGBYYHsICCBAAGBYYChgewgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAhGKABwgIFECEYnwXCAgcQIRigARgKwgIFECEYqwLCAggQABiiBBiJBZgDAOIDBRIBMSBAiAYBkAYIkgcFMTkuNDSgB5G6Aw&sclient=gws-wiz-serp

import React, { useState, useEffect } from 'react';

// const API_SOURCE_1 = "http://localhost:3000/sendcomponent";

const API_SOURCE_2 = "https://www.themealdb.com/api/json/v1/1/random.php";

const API_SOURCE_3 = "https://notion-cs-content.onrender.com/pages";

const API_SOURCE_4 = "https://export-functional-component.onrender.com/sendcomponent";

const API_SOURCE_5 = "https://export-functional-component.onrender.com/pages";


// const theChoices = ["mealDB", "notionCSContent"]

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

  interface FuncCompPropsObj {
    type: string;    
    props: {
      title: string,
      data: Array<number>
    } 
  }
interface CSReadingData {
    id: string; 
    name: string; 
    tags: Array<string>;     
}
function ApiDataDisplayer() {
  const [data, setData] = useState({});
  const [myStr, setMyStr] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState(Array<MealData>);
  const [pages, setPages] = useState(Array<CSReadingData>);


  const [displayData, setDisplayData] = useState("");
//   const [theChoices, setTheChoices] = useState(["mealDB", "notionCSContent", "localServerProps", "localServerReg"]);
//   const [choiceNum, setChoiceNum] = useState(3);

  const theChoices: Array<string> = ["mealDB", "notionCSContent", "localServerProps", "localServerReg"];
  const choiceNum: number = 2;

//   const [myChoice, setMyChoice] = useState(theChoices[1]);

  const fetchChoice = (myChoice: string) => {
    switch(myChoice){
        case theChoices[0]:
            return API_SOURCE_2;
        case theChoices[1]:
            return API_SOURCE_3;
        case theChoices[2]:
            return API_SOURCE_4;
        case theChoices[3]:
            return API_SOURCE_5;
        default:
            return API_SOURCE_2;
    } 
  }
  
  const tryCatchChoice = (myChoice: string, result: any) => {
    if(myChoice === theChoices[0])
    {
        const theString = JSON.stringify(result.meals);
        setMyStr(theString);
        setMeals(result.meals);
        // This sometimes works
        // setDisplayData(meals[0].strMeal);
        // This always works
        // setDisplayData(JSON.stringify(meals[0].strMeal));
    }
    else if(myChoice === theChoices[1])
    {  
        setPages(result);
        // This sometimes works
        // setDisplayData(pages[8].name);
        // This always works
        setDisplayData(JSON.stringify(pages[8].name));
    }
    else if(myChoice === theChoices[2])
    {   
      const myVar = result as FuncCompPropsObj;

      // CHQ: all three below work - praise God!
      // setDisplayData(myVar.type);
      // setDisplayData(myVar.props.title);
      setDisplayData(JSON.stringify(myVar.props.data));
    }
    else if(myChoice === theChoices[3])
    {  
        setPages(result);
        // This sometimes works
        // setDisplayData(pages[8].name);
        // This always works
        setDisplayData(JSON.stringify(pages[13].name));
        // but does this?
          setDisplayData(String(pages[13].name));
    }
  }

  const returnChoice = (myChoice: string) =>{
    switch(myChoice){
        case theChoices[0]:
            return meals[0].strMeal;
        case theChoices[1]:
            return pages[8].name;
        case theChoices[2]:
            return displayData;
        case theChoices[3]:
            return pages[13].name;
        default:
            return "No data to show";
    } 
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching

      try {
        const response = await fetch(fetchChoice(theChoices[choiceNum]));
        const result = await response.json();
 
        tryCatchChoice(theChoices[choiceNum], result);
 
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

        <p>{ returnChoice(theChoices[choiceNum]) }</p>

          {/* returnChoice */}
          {/* <p>{ myChoice === theChoices[0]? meals[0].strMeal: pages[8].name }</p> */}
          {/* <p>{displayData}</p> */}
          {/* <p>{pages[8].name}</p> */}
          {/* pages[8].name */}

          {/* Following two cause issues with page loading: */}
          {/* {data} */}
          {/* {myStr} */} 
        </div>
      )}
    </div>
  );
}

export default ApiDataDisplayer;
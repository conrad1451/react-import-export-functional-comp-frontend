// sources
// [A1]: https://www.google.com/search?q=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&client=firefox-b-1-d&sca_esv=45d74a8068dcbd28&ei=bCUkZ8aXJpqkiLMPktWVwQ4&ved=0ahUKEwjG_bLg9LmJAxUaEmIAHZJqJegQ4dUDCBA&uact=5&oq=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&gs_lp=Egxnd3Mtd2l6LXNlcnAiQ3VzZSBhIGZsYWcgaW4gcmVhY3RqcyB0byBkZXRlcm1pbmUgd2hlbiBkYXRhIGhhcyBsb2FkZWQgZnJvbSBhbiBBUElItGxQsAlY_GlwAXgCkAEAmAGuAaABgTqqAQUyOS4zObgBA8gBAPgBAZgCP6AC5DXCAgQQABhHwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiDAcICBRAuGIAEwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBjRAxjHAcICDRAAGIAEGLEDGEMYigXCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYyQPCAgsQABiABBiSAxiKBcICCBAAGIAEGLEDwgIFEAAYgATCAggQABgWGB4YD8ICBhAAGBYYHsICCBAAGBYYChgewgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAhGKABwgIFECEYnwXCAgcQIRigARgKwgIFECEYqwLCAggQABiiBBiJBZgDAOIDBRIBMSBAiAYBkAYIkgcFMTkuNDSgB5G6Aw&sclient=gws-wiz-serp

import React, { useState, useEffect } from 'react';

const API_SOURCE_1 = "http://localhost:3000/sendcomponent";

const API_SOURCE_2 = "https://www.themealdb.com/api/json/v1/1/random.php";

const API_SOURCE_3 = "https://api.example.com/data";

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching

      try {
        const response = await fetch(API_SOURCE_2);
        const result = await response.json();
        // setData(result);
        setData(result[0].strMeal);
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
          {data && data.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyComponent;
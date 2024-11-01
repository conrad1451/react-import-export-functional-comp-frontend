// Sources: 
// [A1]: https://www.google.com/search?q=typecast+to+custom+type+in+typescript&client=firefox-b-1-d&sca_esv=604b5f8f73d33d4a&ei=FTwkZ4zzJ4mk5NoPw8O_6Q4&oq=typecast+to+custom+type+in+typ&gs_lp=Egxnd3Mtd2l6LXNlcnAiHnR5cGVjYXN0IHRvIGN1c3RvbSB0eXBlIGluIHR5cCoCCAAyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBTIFECEYnwUyBRAhGJ8FMgUQIRifBTIFECEYnwVI4SJQhwFYvRdwBXgBkAEAmAGMAqABqw2qAQUyLjkuMbgBA8gBAPgBAZgCEKACzgvCAgoQABiwAxjWBBhHwgIFECEYqwKYAwCIBgGQBgiSBwQ2LjEwoAf2WA&sclient=gws-wiz-serp
// [A2]: https://www.google.com/search?q=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&client=firefox-b-1-d&sca_esv=45d74a8068dcbd28&ei=bCUkZ8aXJpqkiLMPktWVwQ4&ved=0ahUKEwjG_bLg9LmJAxUaEmIAHZJqJegQ4dUDCBA&uact=5&oq=use+a+flag+in+reactjs+to+determine+when+data+has+loaded+from+an+API&gs_lp=Egxnd3Mtd2l6LXNlcnAiQ3VzZSBhIGZsYWcgaW4gcmVhY3RqcyB0byBkZXRlcm1pbmUgd2hlbiBkYXRhIGhhcyBsb2FkZWQgZnJvbSBhbiBBUElItGxQsAlY_GlwAXgCkAEAmAGuAaABgTqqAQUyOS4zObgBA8gBAPgBAZgCP6AC5DXCAgQQABhHwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiDAcICBRAuGIAEwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBjRAxjHAcICDRAAGIAEGLEDGEMYigXCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYyQPCAgsQABiABBiSAxiKBcICCBAAGIAEGLEDwgIFEAAYgATCAggQABgWGB4YD8ICBhAAGBYYHsICCBAAGBYYChgewgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAhGKABwgIFECEYnwXCAgcQIRigARgKwgIFECEYqwLCAggQABiiBBiJBZgDAOIDBRIBMSBAiAYBkAYIkgcFMTkuNDSgB5G6Aw&sclient=gws-wiz-serp


import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Receiving side

import axios from "axios";

const API_SOURCE = "http://localhost:3000/sendcomponent";
const API_SOURCE_2 = "https://www.themealdb.com/api/json/v1/1/random.php";

// import MyComponent from './MyComponent';

// const componentConfig = JSON.parse(jsonString);

// const ComponentToRender = components[componentConfig.type]; // Lookup component based on type

// <ComponentToRender {...componentConfig.props} />

// http://localhost:3000/sendcomponent

interface CompConfig {
  type: string;
  props: {
      title: string;
      data: Array<number>
  }  
}

// 'String' is an unused renaming of 'title'. Did you intend to use it as a type annotation?ts(2842)
// function MyComponent({title: String, data: Array<Number>}){
function MyComponent({title, data}){
  
  return(
    <>
    <p>{title}</p>
  
    </>
    )
}

function OldApp(){
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


let myStartData: React.FC<CompConfig>;

let myStartData2: CompConfig;


function App() {
  const [count, setCount] = useState(0);
  // const [myData, setMyData] = useState({})

  const [myData, setMyData] = useState(myStartData2);

  const [myString, setMyString] = useState("");

  /**Argument of type 'FC<CompConfig>' is not assignable to parameter of type 'ReactNode | (() => ReactNode)'.
  Type 'FunctionComponent<CompConfig>' is not assignable to type '() => ReactNode'.
    Target signature provides too few arguments. Expected 1 or more, but got 0.ts(2345) */
  // const [myData, setMyData] = useState(myStartData)


  // React.FC<DynamicComponentPropsAlt>[]
  useEffect(() => {
    // axios.get(databaseId).then((res) => {
    axios.get(API_SOURCE_2).then((res) => {
      // axios.get(API_SOURCE).then((res) => {
      // const theData = res.data;
      const jsonString = res.data;

      // const componentConfig = JSON.parse(jsonString);

      const myReadData =JSON.parse(jsonString);

      // [A1]
      // let myNewVar = CompConfig(10);

      // CHQ: nice it caught that
      // Conversion of type 'number' to type 'CompConfig' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
      // let myNewVar = 10 as CompConfig;

      // const myNewVar = componentConfig as CompConfig;
      
      // setMyData(myNewVar);

      // setMyString(componentConfig);

      setMyString(myReadData[0].strMeal);


      // const ComponentToRender = components[componentConfig.type]; // Lookup component based on type
      // <ComponentToRender {...componentConfig.props} />


      // setPages(theData);
      // console.log(pages);
    });
  }, []);
  // return(<OldApp/>)

  return(
    <>
    {/* <MyComponent title="One sec" data={[1,2,3]}/> */}
    <p>The Text is {myString}</p>
    {/* <MyComponent {...myData.props}/> */}
    </>
  )
}

export default App

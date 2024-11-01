import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Receiving side

import axios from "axios";

const API_SOURCE = "http://localhost:3000/sendcomponent";

// import MyComponent from './MyComponent';

// const componentConfig = JSON.parse(jsonString);

// const ComponentToRender = components[componentConfig.type]; // Lookup component based on type

// <ComponentToRender {...componentConfig.props} />

// http://localhost:3000/sendcomponent


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

function App() {
  const [count, setCount] = useState(0)
  const [myData, setMyData] = useState({})
  useEffect(() => {
    // axios.get(databaseId).then((res) => {
    axios.get(API_SOURCE).then((res) => {
      // const theData = res.data;
      const jsonString = res.data;

      const componentConfig = JSON.parse(jsonString);
      setMyData(componentConfig);

      // const ComponentToRender = components[componentConfig.type]; // Lookup component based on type
      // <ComponentToRender {...componentConfig.props} />


      // setPages(theData);
      // console.log(pages);
    });
  }, []);
  // return(<OldApp/>)

  return(
    <>
    <MyComponent title="One sec" data={[1,2,3]}/>
    {/* <MyComponent {...myData.props}/> */}
    </>
  )
}

export default App

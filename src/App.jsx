import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import EmployeeList from './components/EmployeeList'

function App() {

  //Exempel på två states
  // name (med default-värdet Markus)
  // showList (med default-värdet true)
  let [name, setName] = useState("Markus");
  let [showList, setShowList] = useState(true);
  
  let employees = [
    {name:"Batman",age:38},
    {name:"Leonardo Da Vinci",age:25},
    {name:"Fred",age:62},
    {name:"Lenny",age:17}];

  let handleChange = () => {
    let newName = document.querySelector("#nameInput").value;
    //Funktion för att ändra på name-state till nytt namn från input
    setName(newName);
  }

  let toggleList = () => {
    //Ändrar på showList mellan true/false
    setShowList(!showList);
  }

  return (
    <>
      <h1>Props with React</h1>
      <input type="text" id="nameInput" />
      <button onClick={handleChange}>Change name</button>
      <h2>Welcome back, {name}</h2>
      <button onClick={toggleList}>{showList ? "Hide list": "Show list"}</button>
      {showList && <EmployeeList data={employees}/>}
    </>
  )
}

export default App

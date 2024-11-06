import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './components/EmployeeList'

function App() {

  let employees = [
    {name:"Batman",age:38},
    {name:"Leonardo Da Vinci",age:25},
    {name:"Fred",age:62},
    {name:"Lenny",age:17}];

  return (
    <>
      <h1>Props with React</h1>
      <h2>Employees</h2>
      <EmployeeList data={employees}/>
    </>
  )
}

export default App

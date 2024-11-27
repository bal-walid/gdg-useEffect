import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import './output.css'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App;

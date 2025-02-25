import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'

function App() {
  return (
    
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </BrowserRouter>
    </div>
   
    </>
  )
}

export default App
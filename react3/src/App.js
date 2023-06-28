import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'
import { useDispatch } from 'react-redux'
import { getAllStu } from './redux/StudentSlice'

const App = () => {

  let disp = useDispatch();

  disp(getAllStu())

  return (
    <>
    <Header />
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="student" element={<Student />} />
    </Routes>

    </>
  )
}

export default App
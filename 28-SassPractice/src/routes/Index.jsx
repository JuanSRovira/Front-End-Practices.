import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { Dashboard, Home, Login, Secret, SignUp } from '../pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={Home}> </Route>
      <Route path='/Dashboard' element={Dashboard}> </Route>
      <Route path='/Login' element={Login} />
      <Route path='/Secret' element={Secret} />
      <Route path='/SignUp' element={SignUp} />
    </Routes>
  )
}

export default RoutesIndex

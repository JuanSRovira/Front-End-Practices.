import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import { Dashboard, Home, Login, Secret, SignUp } from '../pages'
import { useAdmincontext } from '../Hooks/UseAdmin'

const RoutesIndex = () => {
  const { isAdmin } = useAdmincontext()
  return (
    <Routes>
      <Route path='/' element={<Home />}> </Route>
      <Route path='/Dashboard' element={<Dashboard />}> </Route>
      <Route path='/Login' element={<Login />} />
      <Route
        path='/Secret' element={
        isAdmin
          ? <Secret />
          : <Navigate to='/Home' />
      }
      />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  )
}

export default RoutesIndex

/*
 isAdmin
      ? <Secret />
      : <Navigate to='/home'>
      }
      */

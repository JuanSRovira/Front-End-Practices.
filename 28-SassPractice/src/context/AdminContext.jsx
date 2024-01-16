// #1 Crear el contexto

import { createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AdminContext = createContext()

// #2 Crear el proveedor del contexto

const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  const login = (token) => {
    const decoded = jwtDecode(token)
    setIsAdmin(decoded.role === 'ADMIN')
  }

  const logOut = () => {
    localStorage.removeItem('jwt_token')
    setIsAdmin(false)
  }

  return (
    <AdminContext.Provider value={{ isAdmin, login, logOut }}>
      {children}
    </AdminContext.Provider>
  )
}

export {
  AdminContext,
  AdminProvider
}

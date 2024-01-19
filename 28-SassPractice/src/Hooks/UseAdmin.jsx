import { useContext } from 'react'
import { AdminContext } from '@/context/AdminContext'

export const useAdmincontext = () => {
  const context = useContext(AdminContext)

  if (context === undefined) {
    throw new Error('useAdmincontext debe estar dentro del Admin Provider')
  }

  return context
}

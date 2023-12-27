import { createContext, useState, useEffect } from 'react'
import canciones from '@/assets/ListaCanciones.json'

const SongContext = createContext()

function SongProvider ({ children }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
  // crear objeto con la informacion del contexto
  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

// exportar acciones //
export {
  SongContext,
  SongProvider
}

/* Uso de context */
/* Ahora debo de ir a un componente de orden superior */

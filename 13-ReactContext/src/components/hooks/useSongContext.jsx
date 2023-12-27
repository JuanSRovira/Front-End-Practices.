// custon hooks
// Empiezan con la palabra use
// Son funciones.
// Usan otros hoooks
import { useContext } from 'react'
import { SongContext } from '../../contexts/SongContext'

export const useSongContext = () => {
  const context = useContext(SongContext)
  if (!context) {
    throw new Error('useSongContext debe usarse dentro del songProvider')
  }
  return context
}

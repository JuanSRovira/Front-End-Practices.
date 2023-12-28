import './header.css'
import { useSongContext } from '../hooks/useSongContext'

const Header = () => {
  const { selectedSong } = useSongContext()
  return (
    <div className='header_container'>
      {
        selectedSong.title
          ? (
            <span>Now Playing: {selectedSong.title} - {selectedSong.artist}</span>
            )
          : <h2>Selecciona una Canción</h2>
      }
    </div>
  )
}

export default Header

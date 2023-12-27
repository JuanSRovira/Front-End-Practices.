import { useSongContext } from '../hooks/useSongContext'

const SongDetails = () => {
  const { selectedSong } = useSongContext()
  return (
    <>
      {selectedSong.title
        ? (
          <div>
            <img src={selectedSong.cover} alt={selectedSong.title} />
            <h2>{selectedSong.title}</h2>
            <p>{selectedSong.artist}</p>
            <p>{selectedSong.year}</p>
          </div>
          )
        : <h1>Selecciona una cancion</h1>}
    </>
  )
}

export default SongDetails

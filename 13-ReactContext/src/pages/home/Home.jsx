import Songlist from '../../components/SongList/Songlist'
import SongDetails from '../../components/SongDetails/SongDetails'
import { SongProvider } from '../../contexts/SongContext'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
      <div className='home-container'>
        <div className='izquierdo'>
          <Songlist />
          <h1>Lado Izquierdo</h1>
        </div>
        <div className='derecho'>
          <SongDetails />
          <h2>Lado Derecho</h2>
        </div>
      </div>
    </SongProvider>
  )
}

export default Home

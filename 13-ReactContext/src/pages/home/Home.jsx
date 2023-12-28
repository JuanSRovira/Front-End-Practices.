import Songlist from '../../components/SongList/Songlist'
import SongDetails from '../../components/SongDetails/SongDetails'
import { SongProvider } from '../../contexts/SongContext'
import './home.css'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <SongProvider>
      <Header />
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>Song List</h2>
          <Songlist />
        </div>
        <div className='derecho'>
          <SongDetails />
        </div>
      </div>
    </SongProvider>
  )
}
export default Home

import React from 'react'
import './home.css'
import Songlist from '../components/SongList/Songlist'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <Songlist />
        <h2>Izquierdo</h2>
      </div>
      <div className='derecho'>
        <h2>Derecho</h2>
      </div>
    </div>
  )
}

export default Home

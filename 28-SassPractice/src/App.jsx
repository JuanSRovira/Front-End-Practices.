import './App.css'
import Header from '@/components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App

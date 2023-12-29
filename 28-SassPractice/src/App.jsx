import './App.css'
import { Home, Dashboard, Login, Secret, SignUp } from '@/pages'
import Header from './components/Header/Header'

function App () {
  return (
    <>
      <Header />
      <h1>React App</h1>
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <SignUp />

    </>
  )
}

export default App

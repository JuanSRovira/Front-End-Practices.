import { NavLink } from 'react-router-dom'
import './Header.scss'
import { useAdmincontext } from '../../Hooks/UseAdmin'

// Se especifican los elementos por el  "__" (Doble guion bajo)
// En la etiqueta home ya tiene un -- que lo identifica como modificador

const Header = () => {
  const { logOut } = useAdmincontext()
  const linkIsActive = (isActive) => {
    return isActive ? 'header__itemLink header__itemLink--isActive' : 'header__itemLink'
  }
  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>LOGO</NavLink>
      <ul className='header__navList'>
        <li className='header__listItem'>
          <NavLink to='/home' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
        </li>
        <li className='header__listItem'>
          <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>Dashboard</NavLink>
        </li>
        <li className='header__listItem'>
          <NavLink to='/secret' className={({ isActive }) => linkIsActive(isActive)}>Secret</NavLink>
        </li>
        <li className='header__listItem'>
          <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
        </li>
        <li className='header__listItem'>
          <NavLink to='/SignUp' className={({ isActive }) => linkIsActive(isActive)}>SignUp</NavLink>
        </li>
        <li className='header__listItem'>
          <NavLink to='/' onClick={logOut}>Log Out</NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Header

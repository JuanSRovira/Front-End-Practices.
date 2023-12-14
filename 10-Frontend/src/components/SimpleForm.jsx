import React, { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  /* 2.Crear los estados en donde se guardara la informacion tecleada.
  2.1 Los formularios en react suelen estar controlados por un useState que es definido por constantes */

  /* 4. función para ejecutar cambios en el boton de enviar formulario */

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Email:', email, 'password: ', password)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /* 1. Crear un formulario */
  return (
    <div className='Login'>
      <div className='Login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit}>
          {/* 3. Guardar la informacion en el estado correspondiente */}
          <label htmlFor='Email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@porfavor.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label htmlFor='Password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={() => setPassword(event.target.value)}
            value={password}
          />
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>

    </div>
  )
}

export default SimpleForm

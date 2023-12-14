import { useForm } from 'react-hook-form'
import logo from '../assets/react.svg'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const ReactHookForm = () => {
  const schema = yup
    .object({
      firstName: yup.string('Por favor no uses numeros').required('Por favor, dime tu nombre'),
      age: yup.number('Por favor usa un numero').positive('No puedes tener numeros negativos').integer().required()
    })
    .required()

  // API: https://dummyjson.com/docs/users
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >

          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName', { required: true, maxLength: 2 }, { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.firstName?.message}</p>

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.lastName?.message}</p>

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age', { min: 18, max: 99 })}
          />
          <p>{errors.age?.message}</p>

          <label htmlFor='genre'>Genero</label>
          <select name='genre' id='genre' {...register('genre')}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
          <p>{errors.genre?.message}</p>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            {...register('password')}
          />
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm

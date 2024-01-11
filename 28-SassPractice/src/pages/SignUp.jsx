import React from 'react'
import logo from '../assets/react.svg'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { registerUserService } from '../services/userservices'

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(sendData)}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h2 mb-3 fw-normal'> Please Sign Up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            name='first_name'
            id='first_name'
            placeholder='John'
            {...register('first_name')}
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            name='last_name'
            id='last-name'
            className='form-control'
            placeholder='Doe'
            {...register('last_name')}
          />
          <label htmlFor='last_name'> Last Name </label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            name='gender'
            id='gender'
            {...register('gender')}
          >
            <option> Choose...</option>
            <option value='M'> Male</option>
            <option value='F'> Female</option>
          </select>
          <label htmlFor='gender'> Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            id='email'
            className='form-control'
            {...register('email')}
            placeholder='example@email.com'

          />
          <label htmlFor='email'> Email adress</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
            {...register('password')}
            placeholder='Password'
          />
          <label htmlFor='password'> Password </label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'> Sign In </button>
        <p className='mt-5 mb3 text-muted'> © 2017–2022</p>
      </form>
    </main>
  )
}

export default SignUp

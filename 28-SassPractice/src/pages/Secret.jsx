import React, { useEffect, useState } from 'react'
import { getAllUserServices } from '../services/userservices'

const Secret = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('jwt_token')
        const { data } = await getAllUserServices(token)
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUserData()
  }, [])

  return (
    <>
      <h1>Secret</h1>
      <div>
        {loading
          ? <h1> Cargando ...</h1>
          : users.map(({ id, first_name, last_name, gender, email }) =>
            (<div key={id}>
              <span>{first_name}</span><br />
              <span>{last_name}</span><br />
              <span>{gender}</span><br />
              <span>{email}</span><br />
             </div>
            ))}
      </div>
    </>
  )
}

export default Secret

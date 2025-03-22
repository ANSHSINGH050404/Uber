import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    axios.get(`${import.meta.env.VITE_API_BASE_URI}/user/logout`, { headers: { Authorization: `Bearer ${token}` } })
    .then(res => {
        localStorage.removeItem('token')
        navigate('/login')
    })
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout
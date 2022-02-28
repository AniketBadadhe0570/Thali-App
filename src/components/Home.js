import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  
  return (
    <div className='home'>
        <h1>Andy's Food Court</h1>
        <h2>Explore our best Cusion</h2>
        <button onClick={() => { navigate("/Menu") }}>Special Items For Thali</button>
    </div>
  )
}

export default Home
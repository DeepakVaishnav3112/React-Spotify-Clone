import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between px-5 py-3'>
        <div className='flex gap-2'>
            <button onClick={() => navigate(-1)} className='bg-black rounded-full p-3'><img className='w-3' src={assets.arrow_left} alt="" /></button>
            <button onClick={() => navigate(1)} className='bg-black rounded-full p-3'><img className='w-3' src={assets.arrow_right} alt="" /></button>
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-5'>
            <button className='text-white box-border font-bold bg-white/10 px-5 py-2 rounded-full'>Exploe Premium</button>
            <button className='text-black box-border bg-white font-bold px-5 py-2 rounded-full'>Install App</button>
            </div>
            <p className='bg-purple-700 text-white px-4 py-2 rounded-full font-medium cursor-pointer'>D</p>
        </div>
    </div>
  )
}

export default Navbar
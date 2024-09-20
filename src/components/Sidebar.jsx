import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='sidebar py-3 px-1 w-[25vw] h-full overflow-y-auto'>

        <div className='bg-[#121212] px-6 py-5 flex flex-col gap-5 rounded-lg mb-2 h-fit'>
          <div onClick={()=>navigate('/')} className='flex items-center gap-3 text-white font-bold w-fit cursor-pointer'>
            <img className='w-7' src={assets.home_icon} alt="" />
            <span className=''>Home</span>
          </div>
          <div className='flex items-center gap-3 text-white font-bold w-fit cursor-pointer'>
            <img className='w-7' src={assets.search_icon} alt="" />
            <span className=''>Search</span>
          </div>
        </div>

        <div className='bg-[#121212] py-5 rounded-lg h-[70vh]'>
          <div className='mx-3 h-full relative'>

            <div className='flex flex-col gap-10'>
              <div className='flex items-center justify-between px-3'>
                <div className='flex items-center text-white gap-2'>
                  <img className='w-9' src={assets.stack_icon} alt="" />
                  <span className='font-bold text-lg'>Your Library</span>
                </div>
                <div>
                  <img className='w-5 pt-[1px]' src={assets.plus_icon} alt="" />
                </div>
              </div>

              <div className='bg-[#1f1f1f] text-white py-3 flex flex-col rounded-lg px-3 gap-4'>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Create your first playlist</h2>
                  <span className='text-sm'>It's easy, we'll help you</span>
                </div>
                <button className='w-fit bg-white text-black font-bold text-sm rounded-full px-3 py-1'>Create Playlist</button>
              </div>
            </div>

            <div className='text-white/70 text-xs absolute bottom-0'>
              <div className='flex flex-col gap-3 mx-2'>
                <div className='flex gap-4'>
                  <span><a href="/">Legel</a></span>
                  <span><a href="/">Safety & Privacy Center</a></span>
                  <span><a href="/">Privacy Policy</a></span>
                </div>
                <div className='flex gap-4'>
                  <span><a href="/">Cookies</a></span>
                  <span><a href="/">About Ads</a></span>
                  <span><a href="/">Accessibility</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar
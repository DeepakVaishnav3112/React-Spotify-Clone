import React from 'react'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import Navbar from './Navbar'

const Displayhome = () => {
  return (
    <>

      <Navbar></Navbar>

      <div className='text-white flex gap-2 px-7 font-medium'>
        <div className='bg-white text-black px-5 py-2 rounded-full cursor-pointer'>All</div>
        <div className='bg-black px-5 py-2 rounded-full cursor-pointer'>Music</div>
        <div className='bg-black px-5 py-2 rounded-full cursor-pointer'>Podcasts</div>
      </div>
      <div className='px-5 overflow-y-auto space-y-5'>
        <AlbumItem></AlbumItem>
        <SongItem></SongItem>
      </div>


    </>
  )
}

export default Displayhome
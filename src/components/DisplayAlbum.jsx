import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/playerContex'

const DisplayAlbum = () => {

  const { id } = useParams()
  const albumData = albumsData[id];

  const {playWithId} = useContext(PlayerContext);

  return (
    <>
      <Navbar></Navbar>
      <div className='space-y-10 overflow-y-auto mb-5'>

        <div className='flex text-white px-5 py-2 gap-5 '>
          <img className='w-48 rounded' src={albumData.image} alt="" />
          <div className='flex flex-col justify-end gap-2'>
            <div>Playlist</div>
            <h1 className='text-6xl font-bold'>{albumData.name}</h1>
            <div className='text-sm text-white/70'>{albumData.desc}</div>
            <div className='flex items-center gap-1'>
              <div className='flex items-center'>
                <img className='w-5 h-5' src={assets.spotify_logo} alt="" />
                <span className='font-medium'>&nbsp;Spotify, </span>
              </div>
              <b> 50 songs, </b>
              <span>about 2 hr 30 min</span>
            </div>
          </div>
        </div>

        <div>

          <div className='px-3 space-y-5'>
            <div className='grid grid-cols-4 text-[#a7a7a7] px-5 w-full font-bold items-center'>
              <p><b className='mr-4'>#</b>Title</p>
              <p>Album</p>
              <p>Date Added</p>
              <img className='w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr className='mx-2' />
          </div>


          <div className='spacey1'>
            {songsData.map((item, index) => (

              <div onClick={()=> playWithId(item.id)} key={item.id} className='grid grid-cols-4 px-5 py-2 w-full text-white items-center hover:bg-white/20'>
                <div className='flex items-center'>
                  <b className='mr-4'>{index + 1}</b>
                  <img className='w-10 mr-4' src={item.image} alt="" />
                  {item.name}
                </div>
                <div>{albumData.name}</div>
                <div>5 days ago</div>
                <div>{item.duration}</div>
              </div>

            ))}
          </div >
        </div>
      </div>
    </>
  )
}

export default DisplayAlbum
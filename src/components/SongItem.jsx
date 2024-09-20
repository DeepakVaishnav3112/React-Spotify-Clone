import React, { useContext } from 'react'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/playerContex'

const SongItem = () => {

    const {playWithId} = useContext(PlayerContext);

    return (
        <div className='space-y-3'>
            <h1 className='text-white font-bold text-2xl hover:underline px-2 w-fit'>Todays Biggest Hits</h1>
            <div className='songlist flex gap-1 overflow-x-auto'>
                {songsData.map((item, index) => {
                    return (
                        <div onClick={()=> playWithId(item.id)} key={item.id} className='p-2 hover:bg-[#1d1d1d] text-white flex flex-col gap-2 rounded cursor-pointer'>
                            <div><img className='w-40 rounded' src={item.image} alt="" /></div>
                            <p className='w-40 font-medium text-lg'>{item.name}</p>
                            <p className='w-40 h-10 text-sm text-white/70'>{item.desc.slice(0, 40)}...</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SongItem
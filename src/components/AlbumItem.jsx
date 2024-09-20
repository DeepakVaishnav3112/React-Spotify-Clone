import React from 'react'
import { albumsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const AlbumItem = () => {

    const navigate = useNavigate()

    return (
        <div className='space-y-3'>
            <h1 className='text-white font-bold text-2xl hover:underline px-2 w-fit'>Featured Charts</h1>
            <div className='flex gap-1 overflow-x-auto'>
                {albumsData.map((item, index) => {
                    return (
                        <div onClick={() => navigate(`/album/${item.id}`)} key={item.id} className='p-2 hover:bg-[#1d1d1d] text-white flex flex-col gap-2 rounded cursor-pointer'>
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

export default AlbumItem
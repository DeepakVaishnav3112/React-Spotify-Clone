import React, { useEffect, useRef } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import DisplayAlbum from './DisplayAlbum';
import Displayhome from './Displayhome';
import { albumsData } from '../assets/assets';

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else {
      displayRef.current.style.background = `#121212`
    }
  })

  const routes = useRoutes([
    {
      path: '/',
      element: <Displayhome />
    },
    {
      path: '/album/:id',
      element: <DisplayAlbum />
    }
  ]);

  return (
    <div className='py-3 px-1 w-[75vw] h-full'>
      <div ref={displayRef} className='bg-[#121212] flex flex-col gap-5 rounded-lg mb-2 h-[87.7vh] relative'>
        {routes}
      </div>
    </div>
  );
}

export default Display;

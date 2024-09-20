import React, { useContext} from 'react'
import Sidebar from './components/Sidebar'
import Playbar from './components/Playbar'
import Display from './components/Display'
import { PlayerContext } from './context/playerContex'

const App = () => {

  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className='relative'>
      <div className='bg-black h-[100vh]'>
        <div className='flex h-full'>
          <Sidebar></Sidebar>
          <Display></Display>
        </div>
      </div>
        <Playbar></Playbar>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/playerContex'

const Playbar = () => {

  const { seekBar, seekBall, seekBg, playStatus, play, pause, track, time, previousSong, nextSong, seekSong } = useContext(PlayerContext);

  return (
    <div className='absolute bg-gradient-to-r from-[#af2896] to-[#509bf5] w-full bottom-0 p-2 flex justify-between items-center'>
      <div className='flex items-center gap-2 text-white'>
        <div>
          <img className='w-12 rounded-sm' src={track.image} alt="Song Image" />
        </div>
        <div className='font-semibold flex flex-col gap-1'>
          <div className='leading-none'>
            {track.name}
          </div>
          <div className='leading-none'>
            {track.desc.slice(0, 12)}
          </div>
        </div>
      </div>

      <div className='text-white flex flex-col items-center'>
        <div className='flex gap-3'>
          <button><img className='w-5' src={assets.shuffle_icon} alt="" /></button>
          <button onClick={previousSong}><img className='w-5' src={assets.prev_icon} alt="" /></button>
          {
            playStatus
              ? <button onClick={pause}><img className='w-5' src={assets.pause_icon} alt="" /></button>
              : <button onClick={play}><img className='w-5' src={assets.play_icon} alt="" /></button>
          }
          <button onClick={nextSong}><img className='w-5' src={assets.next_icon} alt="" /></button>
          <button><img className='w-5' src={assets.loop_icon} alt="" /></button>
        </div>
        <div className='flex items-center gap-2'>
          <span>{time.currentTime.minute}:{time.currentTime.second}</span>
          <div ref={seekBg} onClick={seekSong} className='min-w-60 bg-white h-1 relative flex items-center cursor-pointer'>
            <div ref={seekBall} className='w-3 h-3 bg-white rounded-full absolute left-[0%] cursor-pointer'></div>
            <div ref={seekBar} className='w-[0%] h-1 bg-green-700 absolute'></div>
          </div>
          <span>{time.totalTime.minute}:{time.totalTime.second}</span>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <button><img className='w-5' src={assets.plays_icon} alt="" /></button>
        <button><img className='w-5' src={assets.mic_icon} alt="" /></button>
        <button><img className='w-5' src={assets.queue_icon} alt="" /></button>
        <button><img className='w-5' src={assets.speaker_icon} alt="" /></button>
        <button><img className='w-5' src={assets.volume_icon} alt="" /></button>
        <button><img className='w-5' src={assets.mini_player_icon} alt="" /></button>
        <button><img className='w-5' src={assets.zoom_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default Playbar
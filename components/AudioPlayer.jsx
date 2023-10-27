
import { useState, useRef } from 'react';

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);


  const audioRef = useRef(typeof Audio !== "undefined" ? new Audio("/images/friend.mp3") : undefined);

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
    <div>
      <button className='bg-green-500 w-[8rem] h-[3rem] text-white text-[1.4rem] border-4 rounded border-white' onClick={playing ? pause : play}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default AudioPlayer;
import  { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import '../App.css';
import { useMovie } from '../store/useMovie';

export default function Video({ movieId }) {
  const {youtubeId,setYoutubeId} = useMovie()
  useEffect(() => {
    setYoutubeId(movieId)
  }, []);
  return (
    <div className='relative'>
      {youtubeId ? (
        <ReactPlayer
          
          playing
          controls
          width={"350px"}
          height={"200px"}
          url={`https://www.youtube.com/watch?v=${youtubeId}`}
        />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

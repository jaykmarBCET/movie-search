import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import '../App.css';

export default function Video({ movieId }) {
  const [key, setKey] = useState('');
  const apiKey = 'f1791c340b1408803e2c923e32217f0b'; // Your API key
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${apiKey}`;
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        const data = res.results;
        if (data && data.length > 0) {
          setKey(data[0].key);
        }
      })
      .catch(err => console.error('error:' + err));
  }, [url]);
  console.log(key);
  return (
    <div className='relative'>
      {key ? (
        <ReactPlayer
          loop={true}
          playing={true} // Enables autoplay
          controls={false} // Optional: Show video controls
          width={"350px"}
          height={"200px"}
          url={`https://www.youtube.com/watch?v=${key}`}
        />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

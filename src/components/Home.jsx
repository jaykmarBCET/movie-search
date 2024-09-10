import { useEffect, useState } from 'react';
import Slides from './Slides';

const Home = () => {

  const [getmovies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  const [error, setError] = useState(null);

  

  const api_key = "f1791c340b1408803e2c923e32217f0b";

  const getTrendingMovies = () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`)
      .then((res) => res.json())
      .then((res) => {
        const movies = res.results;
        setMovies(movies);
      })
      .catch((error) => {
        setError(error);
      });
  };

  

  useEffect(() => {
    setLoad(true)
    getTrendingMovies();
    setLoad(false);
  }, [])
  

  return (
    <div className='bg-black '>
      {
        error ? <h1>Soming have error</h1> : ""
      }
      {
        load?<h1>Loading</h1>:(
          <Slides movies={getmovies} />
        )
      }
     
    </div>
  )


};

export default Home;

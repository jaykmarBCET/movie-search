import React, { useEffect } from 'react'
import MovieList from './MovieList';

export default function PopularMovie() {
    const  [upcomingMovies, setUpcomingMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const getMovies = () => {
      fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=f1791c340b1408803e2c923e32217f0b&append_to_response=videos")
      .then((res) => res.json())
      .then((res) => {
        const getData = res.results;
        setUpcomingMovies(getData);
      })
      .catch((error) => {
        setError(error);
      });
    };
    useEffect(()=>{
      getMovies();
      setLoading(false);
     },[])
  return (
    <>
      <center className='text-2xl my-10 text-center font-bold drop-shadow-md py-2 bg-gray-200 w-80 rounded-lg mx-auto'><h1>Popular  Movies</h1></center>


     {
      loading ? <p>Loading...</p> :(
        <div>
          {
            error?<h1>Something have an error {error}</h1>:(
              <div>
                <MovieList movies={upcomingMovies}></MovieList>
              </div>
            )
          }
        </div>
      )
     }
    </>
  )
}

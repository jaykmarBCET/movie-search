import React, { useEffect } from 'react'
import MovieList from './MovieList';
import { useMovie } from '../store/useMovie';

export default function PopularMovie() {
    const [loading, setLoading] = React.useState(false);
    const {popular, popularMovie} = useMovie()

    
    useEffect(()=>{
      setLoading(true)
      popularMovie()
      setLoading(false);
     },[])
  return (
    <>
      <center className='text-2xl my-10 text-center font-bold drop-shadow-md py-2 bg-gray-200 w-80 rounded-lg mx-auto'><h1>Popular  Movies</h1></center>


     {
      loading ? <p>Loading...</p> :(
        <div>
          {
              <div>
                {popular?<MovieList movies={popular}></MovieList>:""}
              </div>
          }
        </div>
      )
     }
    </>
  )
}

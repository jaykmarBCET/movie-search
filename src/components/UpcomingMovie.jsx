import React, { useEffect } from 'react'
import MovieList from './MovieList';
import { useMovie } from '../store/useMovie';

export default function UpcomingMovie() {
  const [loading, setLoading] = React.useState(false);

  const { upcoming, upcomingMovie } = useMovie()

  useEffect(() => {
    setLoading(true)
    upcomingMovie()
    setLoading(false);
  }, [])
  return (
    <>
      <center className='text-2xl my-10 text-center font-bold  drop-shadow-md py-2 rounded-lg mx-auto'><h1>Upcoming  Movies</h1></center>

      {
        loading ? <p>Loading...</p> : (
          <div>
            {

              <div>
                {
                  upcoming?<MovieList movies={upcoming}></MovieList>:""
                }
              </div>

            }
          </div>
        )
      }
    </>
  )
}

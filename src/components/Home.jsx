import { useEffect } from 'react';
import Slides from './Slides';
import { useMovie } from '../store/useMovie'
import PapularMovie  from './PopularMovie'
const Home = () => {



  const { currentMovie,trendingMovie,trendingMovieMovie } = useMovie()



  useEffect(() => {
    currentMovie()
    trendingMovieMovie("day")
  }, [])


  return (
    <div className='bg-black '>
      
      {
        trendingMovie?
        <Slides movies={trendingMovie} />:""
      }
      <div>
        <PapularMovie/>
      </div>
    </div>
  )


};

export default Home;

'use client'
import MovieList from './MovieList';
import { useMovie } from '../store/useMovie';
import { useState } from 'react';


export default function Search() {
  
  const [search , setSearch] = useState("");
  const {searchMovieMovie,searchMovie} = useMovie()
  
    
  const handleSearch = async () => {
      if (!search.trim()) {
          alert("Please enter a movie name!");
          return;
      }

     await searchMovieMovie(search)
  };

 

  return (
    <>
    <div className='m-auto min-h-[65vh]'>
      <center className='text-4xl mt-10 font-semibold'>Search Any movies</center>

      <div>
        <div className=' max-w-96 mx-auto flex-col mt-10 shadow-lg rounded-2xl flex gap-2 '>
          <input value={search}
          onChange={(event)=>setSearch(event.target.value)}
          className='outline-none rounded-lg border-l-2 border-t-2 border-b-2 shadow-2xl font-semibold text-2xl py-2 px-2 text-center' type="text" placeholder='Search' />
          <button 
             onClick={()=>handleSearch()}
           className='btn shadow-lg py-2  rounded-xl pl-2 bg-blue-500'>Search</button>
        </div>
      </div>
    </div>
    <div>
      {
        searchMovie?<MovieList  movies={searchMovie}/>:"please search movie"
      }
    </div>
    </>
  )
}

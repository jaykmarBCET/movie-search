import React, { useState } from 'react'
import MovieList from './MovieList';

export default function Search() {
  const [movies , setMovies] = useState([]);
  const [search , setSearch] = useState("");
 
  const apiKey = 'f1791c340b1408803e2c923e32217f0b';
    
  const handleSearch = () => {
      if (!search.trim()) {
          alert("Please enter a movie name!");
          return;
      }

      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

      const options = {
          method: 'GET',
          headers: {
              accept: 'application/json'
          }
      };

      fetch(url, options)
          .then(res => res.json())
          .then(res => setMovies(res.results || []))
          .catch(err => console.error('error:', err));
      setSearch("");
  };

  console.log(movies);

  return (
    <>
    <div className='m-auto'>
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
      <MovieList  movies={movies}/>
    </div>
    </>
  )
}

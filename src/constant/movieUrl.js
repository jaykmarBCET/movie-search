
export const baseUrl = 'https://api.themoviedb.org/3'
// searching
export const search = 'https://api.themoviedb.org/3/search'
export const searchByKeyWordURl = 'https://api.themoviedb.org/3/search/keyword'
export const searchByMovie = 'https://api.themoviedb.org/3/search/movie';
export const searchByPersonName = 'https://api.themoviedb.org/3/search/person';
export const searchByTV = 'https://api.themoviedb.org/3/search/tv';
// getting
export const trendingAll = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';     // day or week route
export const trendingMovie = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'  // day or week route
export const trendingPerson = 'https://api.themoviedb.org/3/trending/person/day?language=en-US' // day or week route
// upcoming movies
export const upcomingMovie = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';  // region(region id),page param
// popularMovie
export const popularMovie = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'  // region(region id),page param
// topratedMovie
export const topRatedMovie = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'; // region(region id),page param
// new playing movie
export const newPlayingMovie = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';  // region(region id),page param
/*
   search movie 
keyword param
  1. query
  2. page
SearchByMovie
  1. query 
  2. include_adult
  3. language (en-US)
  4. primary_release_year
  5. region
  6. page
  7. year 
SearchByPersonName
  1. include_adult
  2. language
  3. page
  4. query
SearchByTv
  1. query
  2.first_air_date_year
  3.include_adult
  4. language
  5. page
  6 year
tredingAll
   1. /day 
   2. /week

 */
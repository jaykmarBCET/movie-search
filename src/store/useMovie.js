import {create } from 'zustand'
import {InstanceAxios} from '../constant/InstanceAxios'




const useMovie = create((set)=>({
    current:null,
    upcoming:null,
    popular:null,
    trendingAll:null,
    trendingMovie:null,
    trendingPerson:null,
    topRatedMovie:null,
    searchKeyword:null,
    searchPerson:null,
    searchMovie:null,
    searchTV:null,
    youtubeId:null,

    currentMovie:async()=>{
        const response = await InstanceAxios.get("/trending/all/week",{
            params:{
                page:2,
            }
           
        })
        set({current:response.data.results})
    },
    upcomingMovie:async()=>{
        const response = await InstanceAxios.get('/movie/upcoming',{
            params:{page:1}
        })
        set({upcoming:response.data.results})
    },
    popularMovie:async()=>{
        const response = await InstanceAxios.get('/movie/popular',{
            params:{page:1}
        })
        set({popular:response.data.results})
    },
    trendingAllMovie:async(day)=>{
        const response = await InstanceAxios.get('/trending/all/week/'+day,{
            params:{page:1}
        })
        set({trendingAll:response.data.results})
    },
    trendingMovieMovie:async(day)=>{
        
        const response = await InstanceAxios.get('/trending/movie/'+day,{params:{page:1}})
        
        set({trendingMovie:response.data.results})

    },
    trendingPersonMovie:async(day)=>{
        const response = await InstanceAxios.get('/trending/person/'+day,{params:{page:1}})
        set({trendingPerson:response.data.results})
    },
    topRatedMovieMovie:async(region='in')=>{
        const response = await InstanceAxios.get(`/movie/top_rated`,{params:{region,page:1}})
        set({topRatedMovie:response.data.results})
    },
    searchKeywordMovie:async(keyword)=>{
        const response = await InstanceAxios.get('/search/keyword',{params:{query:keyword,page:1}})
        set({searchKeyword:response.data.results})
    },
    searchMovieMovie:async(moviename)=>{
        const response = await InstanceAxios.get('/search/movie',
            {params:
                {query:moviename
                    ,page:1,
                    include_adult:false,
                }})
        set({searchMovie:response.data.results})
    },
    searchPersonNameMovie:async(person)=>{
        const response = await InstanceAxios.get('/search/person',
            {params:
                {query:person
                    ,page:1,
                    include_adult:false,
                }})
        set({searchPerson:response.data.results})
    },
    searchTvMovie:async(tvName,year="")=>{
        const response = await InstanceAxios.get('/search/tv',{
            params:{
                query:tvName,
                include_adult:false,
                [year?year:""]:year,
                page:1,
            }})
        set({searchMovie:response.data.results})
    },
    setYoutubeId:async(movieId)=>{
        const response = await InstanceAxios.get(`/movie/${movieId}/videos`)
        const key = response.data.results[0].key;
        set({youtubeId:key})
    }

}))

export {useMovie}
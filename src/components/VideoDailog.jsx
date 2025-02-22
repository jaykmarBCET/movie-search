import  { useEffect, useState } from 'react';
import { useMovie } from '../store/useMovie';
import {BeatLoader} from 'react-spinners'
import VideoList from './VideoList'


const VideoDialog = () => {
    const {
        youtubeId, setYoutubeId, upcoming, popular, trendingAll, trendingMovie, topRatedMovie,searchMovie,
        upcomingMovie, popularMovie, trendingAllMovie, trendingMovieMovie,topRatedMovieMovie,searchMovieMovie,
    } = useMovie();
    const [data,setData] = useState("")
    const [isLoeading,setIsloading] = useState(false)
    useEffect(() => {
        upcomingMovie();
        popularMovie();
        trendingAllMovie("week")
        trendingMovieMovie("week")
        topRatedMovieMovie('in')
        
    }, []);

    const searchVideoHandel = async()=>{
        setIsloading(true)
        await searchMovieMovie(data)
        setIsloading(false)
        
    }

    return (
        <div className="flex flex-col md:flex-row w-full h-screen rounded bg-black text-white p-4">
           
            <div className="flex-1 flex flex-col justify-center items-center p-4">
                {youtubeId ? (
                    <iframe 
                        className="w-full h-full max-w-4xl max-h-[80vh]"
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        
                        allow='autoplay'
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p className="text-center">Select a video to play</p>
                )}
                <div className="mt-4">
                    <button className="p-2 bg-red-600 rounded hover:bg-red-700" onClick={() => setYoutubeId(null)}>Close</button>
                </div>
            </div>

            {/* Video List Section */}
            <div className="md:w-1/3 relative items-center flex flex-col p-4 px-2 py-4 rounded-lg bg-gray-900 overflow-y-auto">
                 <div className='flex fixed gap-3 w-[100wh] my-2 justify-center'>
                    <input className='px-4 py-2 rounded-lg outline-none text-black' placeholder='Search Video' type="text" onChange={(e)=>setData(e.target.value)} />
                    <button onClick={searchVideoHandel} className='btn bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700'>{isLoeading?<BeatLoader/>:"Search"}</button>
                 </div>
                <h2 className="text-lg mt-20 font-bold mb-4">Video List</h2>
                {searchMovie && <VideoList list={searchMovie} />}
                {upcoming && <VideoList list={upcoming} />}
                {popular && <VideoList list={popular}/>}
                {trendingAll && <VideoList list={trendingAll} />}
                {trendingMovie && <VideoList list={trendingMovie} />}
                {topRatedMovie && <VideoList list={topRatedMovie} />}

            </div>
        </div>
    );
};

export default VideoDialog;

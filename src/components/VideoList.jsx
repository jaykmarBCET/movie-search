
import { useMovie } from '../store/useMovie'
import {languageCodes} from '../constant/languageCode'

const posterPath = "https://image.tmdb.org/t/p/w500"

const findLanguage = (lenCode) => {
  const language = languageCodes.find((item) => item.code === lenCode);
  return language ? language.name : "English";
};

function VideoList({ list }) {
  const { setYoutubeId } = useMovie()
  return (
    <>
      {list ? list.map((video, index) => (
        <button
          key={index}
          onClick={() => setYoutubeId(video.id)}
          className="p-2  mb-2 bg-blue-600 w-full rounded hover:bg-blue-700 text-white"
        >
          <div className='flex space-x-8  overflow-hidden'>
            <img className=' w-20 h-10 rounded-lg ' src={posterPath + "/" + video.backdrop_path} alt="" />
            <h3 className='h-10 truncate font-semibold font-serif py-2 ' >{video.title}</h3>
            <p>{findLanguage(video.original_language)}</p>
          </div>
        </button>
      )) : ""}
    </>
  )
}

export default VideoList
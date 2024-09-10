import { useState } from "react";
import Video from "./Video";
import { FaWindowClose } from "react-icons/fa";

const Card = ({ data }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

   
    const posterPath = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
    const language = data.original_language === "hi" ? "Hindi" : "English";

    return (
        <div className="card  overflow-hidden  hover:transition-all hover:ease-in-out transition-shadow my-2 mr-2 w-56  text-white bg-black rounded-lg  shadow-lg shadow-gray-950  ">
            <div className='relative'>
                <img src={posterPath} alt="" className='w-72 h-56 hover:opacity-45 -z-20 hover:rounded-lg hover:scale-110 ease-in-out duration-300 hover:motion-safe:animate-spin  ' />
            </div>
            <h1 className='text-center text-4xl font-bold'>{data.title}</h1>
            <div className='w-full h-full flex flex-col'>
                <p className='text-center'>Language: {language}</p>
                <div className='text-center'>
                    <p>release Date: {data.release_date}</p>
                    <p>Rating 10/{data.vote_average}</p>
                    <p>Rating Count  {data.vote_count}</p>
                    <p>popularity : {data.popularity}</p>
                </div>
                <div className="flex flex-wrap">
                    <button className='btn bg-blue-800 py-2 px-4  mb-4  rounded-lg mx-auto  hover:bg-blue-900 mt-10'>Download</button>
                    <button onClick={()=>{setIsModalOpen(true)}} className='btn bg-blue-800 py-2 px-4  mb-4 rounded-lg mx-auto  hover:bg-blue-900 mt-10'>Trailer</button>
                
                        <Modal movideId={data.id} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    

                </div>
            </div>
        </div>
    )
}

const Modal = ({ isOpen, onClose, movideId }) => {
    if (!isOpen) return null;
    

    return (
        <div className="  z-10 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center  flex-wrap ">
            <div className=" text-black  rounded-lg shadow-lg w-full max-w-md ">
                <div className="flex  justify-between items-center relavite">
                    <h5 className="text-lg font-semibold"></h5>
                    <button onClick={onClose} className="text-black text-4xl absolute mb-10 rounded-xl">
                    <FaWindowClose />
                    </button>
                </div>
                <Video movieId={movideId} />
            </div>
        </div>
    );
};
export default Card;

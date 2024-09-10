import { useEffect, useState } from 'react';
import { MdSkipPrevious,MdSkipNext } from "react-icons/md";
import Video from './Video';

const Slides = ({ movies }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(intervalId);
    },[])
    
    const posterPath = "https://image.tmdb.org/t/p/w500"
   

    const slides = [1,2,3,4,5,6,7,8,9,10,11,12,13 ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative  h-screen mx-auto w-full ">
            <div className="overflow-hidden relative  h-screen rounded-lg">
                {movies.map((item, index) => (

                    <div
                        key={item.id}
                        className={` bg-black absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img src={posterPath+item.backdrop_path}  className=" absolute mx-auto opacity-30   rounded-lg shadow-2xl shadow-blue-100 animate- transition-all ease-in-out duration-700 object-cover w-full h-full " alt='Imag' />
                        
                        <div className=' transition-all ease-in-out duration-500  mt-2 '>
                        <img src={posterPath+item.poster_path} className=' relative mx-auto rounded-xl shadow-lg  shadow-blue-200 ' alt="img" />
                        </div>
                             
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                            <h5 className="text-lg font-bold">{item.title}</h5>
                            <p>{item.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute ml-5 top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
               
               <MdSkipPrevious className='text-2xl shadow-lg hover:text-blue-700' />
            </button>
            <button
                onClick={handleNext}
                className="absolute mr-8 top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                <MdSkipNext className='text-2xl shadow-lg hover:text-blue-700' />
            </button>
            <div className="flex justify-center space-x-2 mt-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slides;

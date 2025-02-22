import { useState } from "react";
import Video from "./Video";
import { FaWindowClose } from "react-icons/fa";
import { languageCodes } from "../constant/languageCode";

const Card = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posterPath = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

  const findLanguage = (lenCode) => {
    const language = languageCodes.find((item) => item.code === lenCode);
    return language ? language.name : "Unknown";
  };

  const language = findLanguage(data.original_language);

  return (
    <div className="relative w-64 bg-gray-900 mx-2 my-2 text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src={posterPath} alt={data.title} className="w-full h-72 object-cover" />
      <div className="p-4">
        <h1 className="text-xl font-bold text-center mb-2">{data.title}</h1>
        <p className="text-sm text-center text-gray-400">Language: {language}</p>
        <div className="mt-2 text-sm text-gray-300">
          <p>Release Date: {data.release_date}</p>
          <p>Rating: ⭐ {data.vote_average}/10</p>
          <p>Votes: {data.vote_count}</p>
          <p>Popularity: {data.popularity}</p>
        </div>
        <div className="flex justify-around mt-4">
         
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Trailer
          </button>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} movieId={data.id} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const Modal = ({ isOpen, onClose, movieId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-4xl bg-red-600 p-2 rounded-full hover:bg-red-800"
        >
          <FaWindowClose />
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <Video movieId={movieId} />
        </div>
      </div>
    </div>
  );
};

export default Card;
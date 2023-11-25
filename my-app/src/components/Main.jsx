import React, { useEffect, useState } from "react";
import requests from "../pages/requests";
import axios from "axios";
import ReactPlayer from "react-player";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  const handlePlayClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="w-full h-[550px] text-white relative">
      <div className='absolute w-full h-full bg-gradient-to-r from-black/50'></div>
      <div className="w-full h-full">
        {selectedMovie ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${selectedMovie.id}`} // Replace with the actual video URL or embed code
            controls
            width="100%"
            height="100%"
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path}`}
            alt={movies[0]?.title}
          />
        )}
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          {selectedMovie ? (
            <h1 className='text-3xl md:text-5xl font-bold'>{selectedMovie.title}</h1>
          ) : (
            <h1 className='text-3xl md:text-5xl font-bold'>{movies[0]?.title}</h1>
          )}
          <div className='my-4'>
            {!selectedMovie && (
              <button
                className='border bg-white text-black rounded shadow-xl border-gray-300 py-2 px-5'
                onClick={() => handlePlayClick(movies[0])}
              >
                Play
              </button>
            )}
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {!selectedMovie ? movies[0]?.release_date : selectedMovie.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {!selectedMovie
              ? truncateString(movies[0]?.overview, 150)
              : selectedMovie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../requests/Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestNowPlaying)
      .then((res) => setMovies(res.data.results));
  }, []);

  // console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.split(" ").slice(0, num).join(" ") + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] font-semibold mb-6  border-b-8 border-[#232323]">
      <div className="w-full h-full">
        <div className="w-full md:h-[550px] h-full absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className=" absolute w-full h-[550px] top-[20%]">
          <h1 className="ml-3 md:text-4xl mt-20 mb-5 text-3xl">
            {movie?.title}
          </h1>
          <div>
            <button className="border border-gray-300 mx-3 py-2 px-4 rounded font-bold bg-white text-black left-4 ">
              Play
            </button>
            <button className="border border-gray-300 mx-3 py-2 px-4 rounded font-bold left-28">
              Watch Later
            </button>
          </div>
          <p className="ml-3 my-2 text-gray-300 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="mx-3 text-gray-200 md:w-3/4">
            {truncateString(movie?.overview, 30)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

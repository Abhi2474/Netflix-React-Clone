import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AccountMovie = ({ movie, deleteShow }) => {
  return (
    <>
      <div className="md:w-[89%]  relative my-3 md:hover:scale-105 transition-all duration-200 ease-in-out">
        <img
          className="rounded-sm p-1"
          src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
          alt=""
        />
        <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:bg-black/40 z-10 hover:opacity-100 flex items-center justify-center ">
          <p className="font-bold w-[90%] text-center whitespace-normal">
            {movie?.title}
          </p>
          <AiOutlineClose
            onClick={() => deleteShow(movie.id)}
            className="absolute top-2 right-2 cursor-pointer hover:scale-150 text-white/50 hover:text-white"
          />
        </div>
      </div>
    </>
  );
};

export default AccountMovie;

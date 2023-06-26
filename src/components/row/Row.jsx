import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieRow from "./MovieRow";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  // console.log(movies);

  const scrollLeft = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft -= 500;
  };

  const scrollRight = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft += 500;
  };

  return (
    <div className="md:my-4 my-2 relative">
      <h1 className="px-2 md:text-lg font-bold opacity-80 ">{title}</h1>
      <div className="w-[98%] h-1/5 top-24 md:flex items-center justify-between mx-auto absolute z-50 left-4 md:hover:opacity-100  md:opacity-0 hidden ">
        <MdChevronLeft
          onClick={scrollLeft}
          className="bg-white/40 hover:bg-white/80 rounded-full w-8 h-8 p-1 cursor-pointer text-black shadow-lg"
        />
        <MdChevronRight
          onClick={scrollRight}
          className="bg-white/40 hover:bg-white/80 rounded-full w-8 h-8 p-1 cursor-pointer text-black shadow-lg"
        />
      </div>
      <div
        id={"slider" + rowId}
        className="flex items-center flex-row w-full h-full md:overflow-x-hidden overflow-auto whitespace-nowrap scroll-smooth relative "
      >
        <div className="">
          {movies.map((movie, id) => {
            return <MovieRow key={id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Row;

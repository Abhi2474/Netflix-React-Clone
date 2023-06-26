import React, { useContext, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import AuthenticationContext from "../../firebase/Context";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const MovieRow = ({ movie }) => {
  const [isFav, setIsFav] = useState(false);
  const { user } = useContext(AuthenticationContext);

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setIsFav(!isFav);

      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please login first to save movie");
    }
  };

  return (
    <>
      <div className="w-[260px] inline-block relative p-2 md:hover:scale-[1.08] hover:ease-in-out transition-all duration-300 hover:overflow-hidden ">
        <img
          className="w-full h-auto rounded relatve shadow-sm "
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt=""
        />

        <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:bg-black/40 z-10 hover:opacity-100 flex items-center justify-center ">
          <p className="font-bold w-[90%] text-center whitespace-normal">
            {movie?.title}
          </p>
          <div
            onClick={saveShow}
            className="absolute top-4 left-4 cursor-pointer"
          >
            {isFav ? <BsHeartFill className="text-red-500" /> : <BsHeart />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieRow;

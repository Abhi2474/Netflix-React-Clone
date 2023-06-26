import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import AuthenticationContext from "../../firebase/Context";
import AccountMovie from "./AccountMovie";

const Account = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthenticationContext);

  // console.log(user);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
      console.log(doc.data()?.savedShows);
    });
  }, [user?.email]);

  // console.log(movies);

  const movieDelRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((movie) => movie.id !== passedID);
      await updateDoc(movieDelRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative pb-20">
        <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-black/10 to-black/30"></div>

        <img
          className="h-full w-full object-cover  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        {movies?.length ? (
          <>
            <h1 className="md:text-3xl my-3 md:pl-5 text-xl pl-2 font-bold">
              Saved Shows
            </h1>

            <div className="grid md:grid-cols-5 grid-cols-2 justify-items-center w-full h-full">
              {movies?.map((movie) => {
                return (
                  <AccountMovie
                    key={movie.id}
                    movie={movie}
                    deleteShow={deleteShow}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <h1 className="text-4xl text-center my-5 font-bold">
            No saved movies
          </h1>
        )}
      </div>
    </>
  );
};

export default Account;

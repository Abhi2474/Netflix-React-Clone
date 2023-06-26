import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationContext from "../../firebase/Context";

const SignUp = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const { user, signup } = useContext(AuthenticationContext);

  const firebaseCreateUser = (signinValue) => {
    signup(signinValue.email, signinValue.password, signinValue.username);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = formInput;

    if (!username || !email || !password) {
      setErrMsg("All fields are Mandatory");
      return;
    } else {
      firebaseCreateUser(formInput);

      if (user?.email) {
        setFormInput({
          username: "",
          email: "",
          password: "",
        });
        window.location.reload();
      }
    }
  };

  const handleChange = (e) => {
    setErrMsg("");
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen relative overflow-hidden">
      <img
        className="absolute opacity-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col z-10 h-[85%] md:w-[35%] bg-black/80 px-16 py-10 text-white/80 mt-20 w-full"
      >
        <h1 className="text-3xl font-bold my-5 ">Sign Up</h1>
        <input
          className="py-4 px-4 my-2 rounded-sm bg-[#333333] focus:bg-[#454545] focus:outline-none text-white text-lg "
          minLength={3}
          name="username"
          type="text"
          placeholder="Username"
          value={formInput.username}
          onChange={handleChange}
        />
        <input
          className="py-4 px-4 my-2 rounded bg-[#333333] focus:bg-[#454545] focus:outline-none text-white text-lg "
          name="email"
          type="email"
          placeholder="Email Address"
          value={formInput.email}
          onChange={handleChange}
        />
        <input
          className="py-4 px-4 my-2 rounded bg-[#333333] focus:bg-[#454545] focus:outline-none text-white text-lg "
          minLength={6}
          name="password"
          type="password"
          placeholder="Password"
          value={formInput.password}
          onChange={handleChange}
        />

        {errMsg ? (
          <h1 className="text-center text-orange-600 font-bold">* {errMsg}</h1>
        ) : (
          ""
        )}

        <input
          className="py-4 px-4 my-8 rounded bg-[#E50914] text-white font-bold cursor-pointer "
          type="submit"
        />
        <div className="font-semibold">
          <span className="text-[#737373]"> Already Registered?</span>
          <Link className="mx-1 hover:underline text-white " to={"/signin"}>
            Sign In now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

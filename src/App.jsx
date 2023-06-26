import React, { useEffect, useState } from "react";
import { Home, FirstPage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, SignIn, SignUp, Account, Footer } from "./components";
import AuthenticationContext from "./firebase/Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

function App() {
  const [user, setUser] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  function signup(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: username,
        });
        console.log(user);
      }
    );
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <>
      <AuthenticationContext.Provider
        value={{ user, signup, login, logout, isSaved, setIsSaved }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <FirstPage />} />
            <Route path="/home" element={user ? <Home /> : <FirstPage />} />
            <Route path="/signup" element={user ? <Home /> : <SignUp />} />
            <Route path="/signin" element={user ? <Home /> : <SignIn />} />
            <Route
              path="/account"
              element={user ? <Account /> : <FirstPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthenticationContext.Provider>
    </>
  );
}

export default App;

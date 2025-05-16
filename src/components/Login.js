import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "./../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./../utils/userSlice";
import { BG_URL, USER_AVATAR } from "./../utils/constants";

const Login = () => {
  const [isSingInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;

    if (!isSingInForm) {
      // SIGN UP

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //  SING IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSingInForm = () => {
    setIsSignInForm(!isSingInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="netflix-logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-3/12 bg-black bg-opacity-[0.85] my-36 p-12 mx-auto right-0 left-0  ty-35 rounded-md text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full my-4 p-2 bg-zinc-700 rounded-s"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="w-full my-4 p-2 bg-zinc-700 rou nded-s"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full my-4 p-2  bg-zinc-700 rounded-s"
        />
        <p className="text-red-500 font-semibold">{errMessage}</p>
        <button
          className="p-4 mt-6 mb-2 w-full bg-red-600 rounded-lg"
          onClick={handleBtnClick}
        >
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="mt-10 mb-2">
          <p
            className=" text-gray-400 cursor-pointer"
            onClick={toggleSingInForm}
          >
            {" "}
            {isSingInForm
              ? "New to Netflix? Sign Up Now."
              : "Already have an Account? Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

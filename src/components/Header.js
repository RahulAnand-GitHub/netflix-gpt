import { useEffect } from "react";
import { auth } from "./../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    // toggle GptSearch Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when the component unmounts.
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row  md:justify-between">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex justify-between md: p-2">
          {showGptSearch && (
            <select
              className="py-2 px-2 mx-2 backdrop-blur-sm bg-white/20 text-white rounded-sm hover:backdrop-blur-none hover:bg-white/50"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 backdrop-blur-sm bg-white/20 text-white rounded-sm hover:backdrop-blur-none hover:bg-white/50"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 rounded-sm"
            src={user?.photoURL}
            alt="user-logo"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

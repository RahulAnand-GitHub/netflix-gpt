import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results.filter((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(trailer[0]));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer

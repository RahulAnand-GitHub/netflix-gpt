import MovieList from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        {/* 
                - Movie List
                    - Movie Card * n
                - Movie List - Now Playing
                - Movie List - Trending
                - Movie Li st - Horror
            */}

        <div className="md:mt-45 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;

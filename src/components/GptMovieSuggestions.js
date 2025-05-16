import { useSelector } from "react-redux";
import MovieList from "./Movielist";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black/30 backdrop-blur-lg text-white rounded-lg">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;

import { useState, useEffect } from "react";
import MovieItem from "./Movieitem";
import { useParams } from "react-router-dom";

// import movies from './movies.json'

function Search() {
  const [movies, setMovies] = useState([]);
  const { q } = useParams();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" +
        q +
        "&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [q]);
  console.log(movies);
  return (
    <div className="list">
      {movies.map((movie) => (
        <MovieItem data={movie} />
      ))}
    </div>
  );
}

export default Search;

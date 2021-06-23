import { useState, useEffect } from "react";
import MovieItem from "./Movieitem";
import { useParams } from "react-router-dom";

// import movies from './movies.json'

function Pric() {
  const [movies, setMovies] = useState([])

  useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
  },[],)
  console.log(movies);
  const myData = movies.sort((a, b) =>
    a.vote_average > b.vote_average ? -1 : 1
  );
  return(
    <div className="list">
    { movies.filter( (item) => (item.genre_ids.includes(12))).map( (movie) => (
     <MovieItem data = {movie} />
     )
    )}
       </div>)
}
export default Pric;

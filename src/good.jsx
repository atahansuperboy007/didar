import { useState, useEffect } from "react";
import MovieItem from "./comp/Movieitem";

// import movies from './movies.json'

function Good() {
  const [good, setGood] = useState([])

  useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=2')
    .then(res => res.json())
    .then(data => {
      setGood(data.results)
    })
  },[],)
  console.log(good);
  const myData = good.sort ((a,b) => a.vote_average > b.vote_average ? -1 : 1)
  return (
    <div className="list">
      {
        good.map(good => (
          <MovieItem data={good} />
        ))
      }
      </div>
      );
}

export default Good;
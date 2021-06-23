import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Movie() {
  const link = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
    }, []);
  console.log(movie);
  if (!movie) return null;
  let gend =""

for (let i of movie.genres) 
  gend+= i.name+", ";
  let gen =""

for (let i of movie.production_companies) 
  gen+= i.name+", ";
  return (
    <div className="movie">
      <img src={link + movie.poster_path} alt="" />
      <div className="movie-text">
        <h2>{movie.title}</h2>
        <h4>Дата выхода : {movie.release_date}</h4>
        <h4>Жанры : {gend}</h4>
        <h4>Оценка : {movie.vote_average}</h4>
        <h4>Длительность : {movie.runtime} мин</h4>
        <h4>Популярность : {movie.popularity}</h4>
        <h4>Страница фильма : {movie.homepage}</h4>
        <h4>{movie.tagline}</h4>
        <p>{movie.overview}</p>
        <iframe src={movie.homepage} frameborder="0"></iframe>
        <p>Фильм создан с компаниями : {gen}</p>
      </div>
      {/* </div>
      <div className="ppo">
      <div className="ikg">
        <img
          src="https://thumbs.dfs.ivi.ru/storage26/contents/9/c/e2d7b8f3f6e2e7acdc9dc1c6684e45.jpg"
          alt=""
        />
      </div>
      <div className="lom">
      <p>
          «Человек-паук: Через Вселенные» (англ. Spider-Man: Into the
          Spider-Verse) — американский анимационный фильм, основанный на
          персонаже Marvel Comics Майлзе Моралесе, произведённый Columbia
          Pictures и Sony Pictures Animation и распространённый Sony Pictures
          Releasing. Мультфильм получил премии «Оскар», «Золотой глобус» и
          «BAFTA». Премьера мультфильма состоялась 13 декабря 2018 года.
          Следующий фильм выйдет 7 октября 2022 года.
        </p>
        <div className="kk">
        <iframe src="https://www.youtube.com/embed/PiqDvLxtY0s" ></iframe>
        </div>
        </div> */}
    </div>
  );
}
export default Movie;

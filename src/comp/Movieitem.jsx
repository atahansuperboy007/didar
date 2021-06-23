import {Link} from 'react-router-dom'
function MovieItem(props) {
  const link = 'https://image.tmdb.org/t/p/w500'
  return (
    <Link to={'/movie/' + props.data.id}  className="item">
      <img src={link + props.data.poster_path} alt="" />
      <h1>{props.data.title}</h1>
      <p> Оценка : {props.data.vote_average}</p>
    </Link>
  );
}
export default MovieItem;

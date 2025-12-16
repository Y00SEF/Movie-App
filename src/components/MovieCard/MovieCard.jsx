import "../../index.css";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate("");

  const {
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    id,
  } = movie;

  async function showdet(id) {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dd96d4abbe568a42507942802fc47719`
    );
    let data = await response.json();
    console.log(data.id);
    navigate(`/move/${data.id}`);
  }

  return (
    <div className="col-md-4">
      <div
        className="movie-card position-relative bg-dark text-white h-100 rounded"
        onClick={() => showdet(id)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="top position-absolute d-flex justify-content-between p-2 w-100 top-0">
          <span className="type">MOVIE</span>
          <span className="rate bg-white rounded fw-bold p-1 text-dark">
            ⭐ {vote_average?.toFixed(1)}
          </span>
        </div>

        <div className="info p-2">
          <h3>{title}</h3>
          <p>{overview}</p>
          <p>
            <strong>Release Date:</strong> {release_date}
          </p>
          <p>
            <strong>Vote Count:</strong> {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

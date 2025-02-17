import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || ""}`}
          alt={movie.title || "Movie Poster"}
        />
        <h3>{movie.title || "Untitled Movie"}</h3>
      </Link>
    </div>
  );
};

// ✅ Define Prop Types for Validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;

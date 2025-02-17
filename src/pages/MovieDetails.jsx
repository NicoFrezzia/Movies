import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieTrailers,
  fetchMovieCast,
  fetchMovieProviders,
  fetchSimilarMovies,
} from "../api";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
    fetchMovieTrailers(id).then(setTrailers);
    fetchMovieCast(id).then(setCast);
    fetchMovieProviders(id).then(setProviders);
    fetchSimilarMovies(id).then(setSimilarMovies);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="movie-header">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>
            {movie.release_date} • {movie.vote_average}/10 • {movie.runtime} min
          </p>
          <p>{movie.overview}</p>
          <h3>Where to Watch</h3>
          <div className="watch-options">
            {providers.length > 0 ? (
              providers.map((provider) => (
                <button key={provider.provider_id}>
                  {provider.provider_name}
                </button>
              ))
            ) : (
              <p>Not available for streaming</p>
            )}
          </div>
        </div>
      </div>

      <h2>Trailer</h2>
      {trailers.length > 0 && (
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailers[0].key}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <h2>Cast & Crew</h2>
      <div className="cast-grid">
        {cast.map((actor) => (
          <div className="cast-card" key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>
              <strong>{actor.name}</strong>
            </p>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>

      <h2>Similar Movies</h2>
      <div className="movies-grid">
        {similarMovies.length > 0 ? (
          similarMovies.map((similar) => (
            <Link
              to={`/movie/${similar.id}`}
              key={similar.id}
              className="movie-card"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${similar.poster_path}`}
                alt={similar.title}
              />
              <h3>{similar.title}</h3>
            </Link>
          ))
        ) : (
          <p>No similar movies found</p>
        )}
      </div>
    </div> 
  );
}

export default MovieDetails;

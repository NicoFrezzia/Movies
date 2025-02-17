import { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchMoviesByGenre, fetchGenres } from "../api";
import MovieCard from "../components/MovieCard";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovies);
    fetchGenres().then((genreData) => {
      setGenres(genreData);
      genreData.forEach((genre) => {
        fetchMoviesByGenre(genre.id).then((movies) => {
          setMoviesByGenre((prev) => ({ ...prev, [genre.name]: movies }));
        });
      });
    });
  }, []);

  return (
    <div className="home">
      <h2>Trending Movies</h2>
      <div className="horizontal-scroll">
        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {genres.map((genre) => (
        <div key={genre.id} className="genre-section">
          <h2>{genre.name}</h2>
          <div className="horizontal-scroll">
            {moviesByGenre[genre.name]?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            )) || <p>Loading...</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

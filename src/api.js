const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  } 
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return {
      ...data,
      vote_average: data.vote_average ? parseFloat(data.vote_average.toFixed(1)) : 0,
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const fetchMovieTrailers = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results?.filter(video => video.type === "Trailer" && video.site === "YouTube") || [];
  } catch (error) {
    console.error("Error fetching movie trailers:", error);
    return [];
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast?.slice(0, 10) || [];
  } catch (error) {
    console.error("Error fetching cast:", error);
    return [];
  }
};

export const fetchMovieProviders = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results?.US?.flatrate || [];
  } catch (error) {
    console.error("Error fetching providers:", error);
    return [];
  }
};

export const fetchSimilarMovies = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results?.slice(0, 9) || [];
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    return data.genres || [];
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error searching for movies:", error);
    return [];
  }
};

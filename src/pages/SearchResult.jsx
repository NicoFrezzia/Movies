import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";
 
function SearchResults() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchMovies(query).then(setSearchResults);
  }, [query]);

  return (
    <div className="search-results-page">
      <h1>{`Search Results for "${query}"`}</h1>
      <div className="search-grid">
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;

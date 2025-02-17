import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); 

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") return;
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <nav className="navigation">
      <h1 className="nav-title">
        <Link to="/" className="home-link">
          Movie Picker
        </Link>
      </h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navigation;

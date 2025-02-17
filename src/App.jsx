import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import SearchResult from "./pages/SearchResult";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;

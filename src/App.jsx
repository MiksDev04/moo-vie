import { useState, useEffect } from "react";
import { GetData, SearchMovies } from "./utils/movieApi";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      // Only fetch new pages when not searching
      (async function () {
        try {
          const data = await GetData(pageNo);
          setMovies(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      // Search directly through API
      (async function () {
        try {
          const searchResults = await SearchMovies(searchTerm, pageNo);
          setMovies(searchResults);
          console.log("Search results:", searchResults);
        } catch (error) {
          console.log("Search error:", error);
        }
      })();
    }
  }, [pageNo, searchTerm]);


  return (
    <div>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Movies setSearchTerm={setSearchTerm} searchTerm={searchTerm} movies={movies} pageNo={pageNo} setPageNo={setPageNo} />
      <Footer />
    </div>
  );
}

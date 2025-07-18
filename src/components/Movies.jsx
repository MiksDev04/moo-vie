import { useState } from "react";
import PropTypes from 'prop-types';
import ShowMovie from "./ShowMovie";

export default function Movies({ setSearchTerm, searchTerm, movies, pageNo, setPageNo }) {
  const [movieId, setMovieId] = useState(0);

  const results = movies.results ?? [];
  const totalPages = movies.total_pages ?? 0;
  const totalResults = movies.total_results ?? 0;

  if (!results || results.length === 0) {
    return (
      <>
        {totalResults === 0 ? (
          <h1 className=" text-gray-300 text-center text-2xl py-5">
            No results found
          </h1>
        ) : (
          <div className=" flex flex-col items-center justify-center py-10">
            <div className=" w-8 h-8 rounded-full border-4 border-b-gray-500 border-gray-300 animate-spin"></div>
            <h1 className="  text-gray-300 text-center text-2xl py-5">
              Loading please wait...
            </h1>
          </div>
        )}
      </>
    );
  }

  if (movieId > 0) {
    return <ShowMovie movieId={movieId} setMovieId={setMovieId} />; // Assuming MovieDetails is a component that shows details of a single movie
  }

  return (
    <div className=" lg:px-20 md:px-10 px-5 py-5">
      <h2 className=" text-2xl font-bold text-blue-800">
        {searchTerm ? (
          <span>Search Results for {searchTerm}</span>
        ) : (
          <span>All Movies</span>
        )}
      </h2>
      <hr className=" border-gray-500 my-3" />
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {results &&
          results.map((movie) => (
            <Movie setSearchTerm={setSearchTerm} key={movie.id} movie={movie} setMovieId={setMovieId} />
          ))}
      </div>
      <div className="flex justify-center gap-2 my-3 items-center">
        <button
          disabled={pageNo <= 1}
          onClick={() => setPageNo((prev) => (prev > 1 ? prev - 1 : prev))}
          className={
            " px-2 py-1 bg-gray-600 text-gray-300" +
            (pageNo <= 1 ? " opacity-50 cursor-not-allowed" : "")
          }
        >
          &lt; Prev
        </button>
        <span className=" text-gray-300 text-xl">
          {pageNo} / {totalPages}{" "}
        </span>
        <button
          disabled={pageNo >= totalPages}
          onClick={() =>
            setPageNo((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          className={
            " px-2 py-1 bg-gray-600 text-gray-300" +
            (pageNo >= totalPages ? " opacity-50 cursor-not-allowed" : "")
          }
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

function Movie({ setSearchTerm, movie, setMovieId }) {

  function handleClick() {
    setSearchTerm("");  
    setMovieId(movie.id);
  }
  if (movie) {
    return (
      <div
        className=" py-2 px-3"
        role="button"
        onClick={handleClick}
      >
        <div className=" rounded-lg overflow-hidden">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto hover:scale-110 transition-transform duration-200 ease-in-out"
            />
          ) : (
            <div className="w-full h-64 flex items-center hover:scale-110 transition-transform duration-200 ease-in-out">
                <p className="text-gray-400 text-center">No backdrop image available</p>
              </div>
          )}
        </div>
        <h1 className=" text-xl text-blue-50 font-medium">{movie.title}</h1>
        <p className=" text-blue-400 flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="1rem"
            height="1rem"
            fill="gold"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <span>{movie.vote_average.toFixed(1)}/10</span>
        </p>
      </div>
    );
  }
}

Movies.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  movies: PropTypes.object.isRequired,
  pageNo: PropTypes.number.isRequired,
  setPageNo: PropTypes.func.isRequired,
};

Movie.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  setMovieId: PropTypes.func.isRequired,
};
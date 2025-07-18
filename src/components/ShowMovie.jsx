import { useEffect, useState } from "react";
import { MovieDetails } from "../utils/movieApi";

export default function ShowMovie({ movieId, setMovieId }) {
  const [movie, setMovieDetails] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        const movieDetails = await MovieDetails(movieId);
        console.log("Movie details:", movieDetails);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-8 h-8 rounded-full border-4 border-b-gray-500 border-gray-300 animate-spin"></div>
        <h1 className="text-gray-300 text-center text-2xl py-5">
          Loading movie details...
        </h1>
      </div>
    );
  }

  return (
    <div className="lg:px-20 md:px-10 px-5 py-8">
      {/* Hero Section with Backdrop */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        {movie.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover"
            onError={() =>
              console.log(
                "Backdrop failed to load:",
                `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              )
            }
          />
        ) : (
          <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
            <p className="text-gray-400">No backdrop image available</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Poster */}
        <div className="lg:w-1/3">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            ) : (
              <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400">No backdrop image available</p>
              </div>
            )}
          </div>
        </div>

        {/* Movie Info */}
        <div className="lg:w-2/3">
          {/* Title */}
          <div className=" flex items-center justify-between gap-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              {movie.title}
            </h1>
            <button
              onClick={() => setMovieId(0)}
              className=" hover:bg-gray-700 text-nowrap mt-4 px-4 py-2 bg-gray-500 text-white underline rounded-md"
            >
              Go back
            </button>
          </div>

          {/* Original Title (if different) */}
          {movie.original_title !== movie.title && (
            <p className="text-gray-400 text-xl mb-4">
              Original: {movie.original_title}
            </p>
          )}

          {/* Rating and Release Date */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-yellow-400 font-semibold text-lg">
                {movie.vote_average.toFixed(1)}/10
              </span>
              <span className="text-gray-400">({movie.vote_count} votes)</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
              <span className="text-blue-400 font-semibold">
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-green-400 font-semibold">
                Popularity: {movie.popularity.toFixed(0)}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {movie.overview}
            </p>
          </div>

          {/* Genres */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span key={genre.id} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Runtime</h3>
              <p className="text-gray-300">
                {movie.runtime ? `${movie.runtime} minutes` : 'N/A'}
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Budget</h3>
              <p className="text-gray-300">
                {movie.budget ? `$${movie.budget.toLocaleString()}` : 'N/A'}
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">IMDB</h3>
              <p className="text-gray-300">
                {movie.imdb_id ? (
                  <a 
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    View on IMDB
                  </a>
                ) : 'N/A'}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-white mb-3">Watch Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">2213 Movies</h3>
                    <a
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      href={`https://2213movies.com/?s=${movie.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Now →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">M4UHD</h3>
                    <a
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      href={`https://m4uhd.com.co/search/${movie.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Now →
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">M4UHD-tv</h3>
                    <a
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      href={`https://m4uhd.page/search/${movie.title}.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

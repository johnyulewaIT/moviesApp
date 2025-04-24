// Importing the MoviesCard component to display individual movie cards
import MoviesCard from "../components/moviesCards";
import banner from "../assets/images/banner.jpg";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../source/api";

function Home(movie) {
  const [searchQuery, setSearchQuery] = useState("");
  const [Movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    console.log("Searching for:", searchQuery); // 👀 Check console
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div
        className="h-[400px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content on top */}
        <div className="relative z-10 text-center text-white px-4 w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Find Your Next Favorite Movie
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Search from thousands of movies across all genres.
          </p>

          {/* Search form */}
          <form onSubmit={handleSearch} className="flex justify-center">
            <div className="flex w-full max-w-xl">
              <input
                className="px-4 py-3 w-full bg-slate-800 text-white focus:outline-none rounded-l-md"
                type="text"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-6 rounded-r-md text-white transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <div>{error}</div>}
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="grid md:grid-cols-6 gap-2 p-3">
          {Array.isArray(Movies) && Movies.length > 0 ? (
            Movies.map((movie) => <MoviesCard movie={movie} key={movie.id} />)
          ) : loading ? (
            <p className="col-span-full text-center text-white">
              Loading movies...
            </p>
          ) : error ? (
            <p className="col-span-full text-center text-red-500">{error}</p>
          ) : (
            <p className="col-span-full text-center text-white">
              No movies found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// Exporting the Home component so it can be used in the app
export default Home;

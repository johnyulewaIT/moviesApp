// MoviesCard component receives a 'movie' object as a prop
function MoviesCard({ movie }) {
  // Function that runs when the heart button is clicked
  function onFavoriteClick() {
    alert("Clicked"); // For now, it just shows an alert
  }

  return (
    <div>
      {/* Movie card container with background color, padding, and rounded corners */}
      <div className="rounded-md ">
        {/* Movie image */}
        <div className="relative z-10 ">
          <img
            className="w-full h-auto rounded-md object-cover  duration-300 transition-transform"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          {/* Favorite button */}
          <button
            onClick={onFavoriteClick}
            className="absolute top-2 right-2 p-2 text-xl bg-white/70 backdrop-blur-sm rounded-full hover:scale-110 transition-transform duration-200"
          >
            💓
          </button>
        </div>

        {/* Movie title */}
        <h1 className="px-3">
          <span className="font-bold">Title: </span>
          {movie.title}
        </h1>

        {/* Movie description or text */}
        <p className="px-3">
          <span className="font-bold">Release Date: </span>
          {movie.release_date}
        </p>
      </div>
    </div>
  );
}

// Exporting the component so it can be used in other parts of the app
export default MoviesCard;

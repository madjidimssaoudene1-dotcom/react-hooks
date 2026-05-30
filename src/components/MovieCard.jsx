function MovieCard({ movie }) {
return (
    <div className="bg-gray-800 rounded-xl shadow-lg w-60 overflow-hidden hover:scale-105 transition">
    <img
        src={movie.posterURL}
        alt={movie.title}
        className="h-80 w-full object-cover"
    />
    <div className="p-3">
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="text-sm text-gray-300">{movie.description}</p>
        <p className="mt-2 text-yellow-400">⭐ {movie.rating}</p>
    </div>
    </div>
);
}

export default MovieCard;
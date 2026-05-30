import MovieCard from "./MovieCard";

function MovieList({ movies }) {
return (
    <div className="flex flex-wrap justify-center gap-6">
    {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
    ))}
    </div>
);
}

export default MovieList;
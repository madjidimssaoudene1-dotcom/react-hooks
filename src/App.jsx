import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Dream-based heist thriller.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      rating: 3,
    },
    {
      title: "Breaking Bad",
      description: "Teacher becomes drug kingpin.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
      rating: 5,
    },{
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space to save humanity.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    rating: 4,
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind spreading chaos in Gotham.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 5,
  }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAddMovie = () => {
    if (!newMovie.title) return;
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie App</h1>

      <Filter
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />

      {/* Add Movie Form */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-wrap gap-3 justify-center mb-6">
        <input
          className="p-2 rounded bg-gray-700"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) =>
            setNewMovie({ ...newMovie, title: e.target.value })
          }
        />
        <input
          className="p-2 rounded bg-gray-700"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          className="p-2 rounded bg-gray-700"
          placeholder="Image URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          className="p-2 rounded bg-gray-700 w-24"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
        />
        <button
          onClick={handleAddMovie}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
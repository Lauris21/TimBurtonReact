import { useState, useEffect } from "react";
import { getMovies } from "../api/moviesApi";
import MoviesGall from "../components/MoviesGall"

const MoviesGallery = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      getMovies().then((res) => setMovies(res))
    }, [])

    return (
        <div className="moviesGallery">
            <h2>🎬 Movies gallery 🎬</h2>
            <MoviesGall movies={movies}/>
        </div>
    )
}

export default MoviesGallery;
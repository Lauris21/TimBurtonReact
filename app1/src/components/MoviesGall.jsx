
import { Link } from "react-router-dom"

const MoviesGall = ({ movies }) => {

    return (
        <div>
        {movies.map((movie) => (
            <figure key={movie.id} className="figureGallery">
                <Link to={`/moviesGallery/${movie.id}`} >
                    <img src={movie.poster} alt={movie.title} />
                </Link>
            </figure>
        ))}
    </div>
    )
}

export default MoviesGall;
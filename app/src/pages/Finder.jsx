import { getMovies } from "../api/moviesApi";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Finder = () => {

    const [filter, setFilter] = useState("Novia Cadáver")
    const [moviesCollection, setMoviesCollection] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
       getMovies().then((res) => setMoviesCollection(res));
       
    }, [])
    
    return (
        <div className="finder">
            <h2>Busca tu peli favorita de Tim y si no esta añádela 🪧.</h2>
            <input type="text" value={filter} 
                onChange={(ev) => setFilter(ev.target.value)} />
            <div>
                {moviesCollection.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
                .map((item) => (
                    <figure className="figurFinder" key={item.title}>
                        <Link to={`/moviesGallery/${item.id}`} >
                            <h2>{item.title}</h2>
                            <img src={item.poster} alt={item.title} />
                        </Link>
                    </figure>
                ))}
            </div>
            <button onClick={(ev) => navigate("/formMovies")}>Add Movie</button>
        </div>
    )
}

export default Finder;
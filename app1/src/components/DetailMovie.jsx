

const DetailMovie = ({ character }) => {

    return (
        <div>
            {character ? (
                <figure className="figureItem" key={character.id}>
                    <div>
                        <div>
                            <h3>{character.title}</h3>
                            <h4>{character.año}</h4>
                        </div>
                        <img src={character.poster} alt={character.title} />
                    </div>
                    <p>{character.description}</p>
                </figure>
            ) : (
                <p>Not Found</p>
            )}      
        </div>
    )
}

export default DetailMovie;
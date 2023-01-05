import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="introImg">
                <div className="intro">
                    <h2><b>Tim Burton</b> Api-Blog</h2>
                    <p>Bienvenid@ a la Api-Blog de Tin Burton.</p>
                    <p>Aqúi puedes consultar y añadir sus mejores peliculas ✍🏽.</p>
                </div>
                <figure>
                    <img src="https://imagenes.elpais.com/resizer/PvfzguZO65A6F6P7EVtDSkwnyOg=/414x0/filters:focal(2471x3251:2481x3261)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IVOSYP755VH5FOAL2PM25LK444.jpg" alt="Tin Burton image" />
                </figure>
            </div>
            <button type="button"
            onClick={() => navigate("/finder")}
            >Go Tim Burton Api</button>
        </div>
    )
}

export default Home;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

const Movie = () => {
  const param = useParams();
  const { id } = param;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://timburtonblog.onrender.com/TimBurtonMovies/${id}`
      );
      const res = await data.json();
      setCharacter(res);
    };
    getData();
  }, []);

  return (
    <div className="detailMovie">
      <h2>Details Movie</h2>
      <DetailMovie character={character} />
    </div>
  );
};

export default Movie;

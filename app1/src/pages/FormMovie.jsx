import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const FormMovie = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");

  const createMovie = (ev) => {
    const movie = {
      title: title,
      poster: poster,
      año: year,
      description: description,
      id: uuidv4(),
    };
    postMovie(movie);
  };

  const postMovie = async (item) => {
    axios({
      method: "post",
      url: "https://timburtonblog.onrender.com/TimBurtonMovies",
      data: item,
    });
  };

  return (
    <div className="formMovie">
      <h2>Hola navegante 👋🏽</h2>
      <p>
        Introduce el título, año, el póster mediante la url y una breve
        sipnosis.
      </p>
      <form
        onSubmit={(ev) => {
          createMovie(ev), navigate("/moviesGallery");
        }}
      >
        <fieldset>
          <legend>Add Movie</legend>
          <div>
            <input
              type="text"
              id="title"
              required
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="Title"
            />
          </div>
          <div>
            <input
              type="number"
              id="year"
              required
              onChange={(ev) => setYear(ev.target.value)}
              placeholder="Year"
            />
          </div>
          <div>
            <input
              type="text"
              id="poster"
              required
              onChange={(ev) => setPoster(ev.target.value)}
              placeholder="Poster"
            />
          </div>
          <div>
            <input
              type="text"
              id="description"
              required
              onChange={(ev) => setDescription(ev.target.value)}
              placeholder="Description"
            />
          </div>
        </fieldset>
        <input type="submit" value="POST" />
      </form>
      <div className="preview">
        <h2>Preview</h2>
        <figure>
          <div>
            <h3>{title}</h3>
            <h4>{year}</h4>
          </div>
          <img src={poster} alt={title} />
          <p>{description}</p>
        </figure>
      </div>
    </div>
  );
};

export default FormMovie;

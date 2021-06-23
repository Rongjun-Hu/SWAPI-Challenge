import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CharactersCard from "./CharactersCard";

const FilmDetail = () => {
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFilmDetail = async (filmId) => {
    try {
      const response = await fetch(`https://swapi.dev/api/films/${filmId}`);
      const data = await response.json();
      setFilmDetails(data);
      const charactersUrl = data.characters;
      console.log(charactersUrl);

      const characterResponse = await Promise.all(
        charactersUrl.map((url) => fetch(url).then((res) => res.json()))
      );
      // console.log(characterResponse);
      setCharacters(characterResponse);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFilmDetail(id);
    // getCharacters();
  }, []);

  return (
    <div className="film-detail">
      <Link to="/" style={{ fontSize: "1.2rem" }}>
        {" "}
        &lt; Back to Home page
      </Link>

      <div className="film-detail-header">
        <h1>{filmDetails.title}</h1>
      </div>

      <h3 className="film-detail-hover">Hover each Card to See details</h3>

      <div className="film-detail-info">
        {loading ? (
          <h1>Characters Data Loading</h1>
        ) : (
          <CharactersCard characters={characters} />
        )}
      </div>
    </div>
  );
};

export default FilmDetail;

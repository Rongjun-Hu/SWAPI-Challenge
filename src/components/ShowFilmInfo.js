import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowFilmInfo = ({ match }) => {
  const { id } = useParams();
  const [filmData, setFilmData] = useState({});

  //   const getSingleFilm = async () => {
  //     const url = `https://swapi.dev/api/films/${id}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);

  //     setFilmData(data);
  //   };

  //   useEffect(() => {
  //     getSingleFilm();
  //   }, []);

  return (
    <div className="container">
      <h1>{filmData.title}</h1>
    </div>
  );
};

export default ShowFilmInfo;

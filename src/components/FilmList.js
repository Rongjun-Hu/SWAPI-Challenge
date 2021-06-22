import React from "react";
import { Link } from "react-router-dom";

const FilmList = ({ films }) => {
  return (
    <>
      {films.map((film) => (
        <div key={film.episode_id} className="flex-row">
          <Link to={`/films/` + film.episode_id}>
            <div className="flex-col">
              <div className="film container">
                <div className="film-heading">
                  <h1>{film.title}</h1>
                  <p>{film.release_date}</p>
                </div>
                <div className="film-intro">
                  <p>{film.opening_crawl}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FilmList;

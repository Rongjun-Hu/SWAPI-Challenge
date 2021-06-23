import React, { useState } from "react";
import { Link } from "react-router-dom";

const FilmList = ({ films, favouriteClick, favoriteComponent }) => {
  const FavouriteComponent = favoriteComponent;

  return (
    <>
      {films.map((film, filmIndex) => (
        <div key={filmIndex} className="flex-row">
          <div className="flex-col">
            <div className="film container">
              <div className="film-heading">
                <h1>{film.title}</h1>
                <p>{film.release_date}</p>

                <div className="film-buttons">
                  <button className="film-buttons-details">
                    <Link to={`/films/` + (filmIndex + 1)}>Details</Link>
                  </button>

                  <button
                    className="film-buttons-favourite"
                    onClick={() => favouriteClick(film)}
                  >
                    Favourite
                  </button>
                </div>
              </div>
              <div className="film-intro">
                <p>{film.opening_crawl}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FilmList;

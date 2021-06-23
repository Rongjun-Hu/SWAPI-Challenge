import React, { useState, useEffect } from "react";
import FilmList from "./FilmList";
import FilmListHeader from "./FilmListHeader";
import SearchFilm from "./SearchFilm";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // GET Request
  const getFilmsRequest = async (searchValue) => {
    const response = await fetch(
      `https://swapi.dev/api/films/?search=${searchValue}`
    );
    const data = await response.json();

    // If typed in search box
    if (searchValue) {
      setFilms(data.results);
    }

    console.log(data.results);

    // Display all the films by defalt
    setFilms(data.results);
  };

  useEffect(() => {
    getFilmsRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const favouritesFilm = JSON.parse(
      localStorage.getItem("favourites-sw-films")
    );

    setFavourites(favouritesFilm);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites-sw-films", JSON.stringify(items));
  };

  const addFavouriteFilm = (film) => {
    const newFavouriteFilm = [...favourites, film];
    setFavourites(newFavouriteFilm);
    saveToLocalStorage(newFavouriteFilm);
  };

  const removeFavouriteFilm = (film) => {
    const newFavouriteFilm = favourites.filter(
      (favourite) => favourite.episode_id !== film.episode_id
    );

    setFavourites(newFavouriteFilm);
    saveToLocalStorage(newFavouriteFilm);
  };
  return (
    <div className="container">
      <div className="flex-row flex-justify-fs">
        <FilmListHeader heading="Favourites Films" />
      </div>
      <div className="flex-row">
        {/* Displat a list of favourites Films */}
        <FilmList films={favourites} favouriteClick={removeFavouriteFilm} />
      </div>
      <div className="border"></div>
      <div className="flex-row flex-justify-sb">
        {/* Films Header and Search Box */}
        <FilmListHeader heading="Films" />
        <SearchFilm searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="flex-row">
        {/* Displat a list of Films */}
        <FilmList films={films} favouriteClick={addFavouriteFilm} />
      </div>
    </div>
  );
};

export default Home;

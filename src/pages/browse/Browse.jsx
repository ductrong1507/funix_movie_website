import React from "react";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/MovieList/MovieList";
import NavBar from "../../components/NavBar/NavBar";

function Browse() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <MovieList />
    </div>
  );
}

export default Browse;

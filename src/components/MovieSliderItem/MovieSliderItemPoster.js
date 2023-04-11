import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MovieSection } from "../StyledComponents/MovieSection/MovieSection";
import { MovieSlider } from "../StyledComponents/MovieSlider/MovieSlider";

export default function MovieSliderItemPoster(props) {
  const [movieState, setMovieState] = useState([]);

  // Hàm call API
  const fetchNetflixOriginals = () => {
    const promise = Axios({
      url: props.apiUrl,
      method: "GET",
    });
    promise
      .then((res) => {
        setMovieState(res.data.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    // Chạy Hàm call api 1 lần duy nhất
    fetchNetflixOriginals();
  }, []);

  return (
    <MovieSection>
      <h1 className="movie_list_heading">{props.title}</h1>
      <MovieSlider movieData={movieState}>
        {/* Render từng Item trong slider */}

        {movieState.map((movie, index) => {
          return (
            <div
              onClick={() => {
                props.getMovieData(movie);
              }}
              key={index}
              className="movie_item"
            >
              <img
                alt={movie.name}
                src={`https://image.tmdb.org/t/p/w200${
                  movie.poster_path || movie.poster_path
                }`}
              />
            </div>
          );
        })}
      </MovieSlider>
    </MovieSection>
  );
}

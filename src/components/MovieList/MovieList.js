import React, { useEffect, useState } from "react";
import Axios from "axios";
import MovieDetail from "../MovieDetail/MovieDetail";
import { API_KEY, RESQUESTBACKDROP, RESQUESTPOSTER } from "../../utils/API";
import styled from "styled-components";
import MovieSliderItemPoster from "../MovieSliderItem/MovieSliderItemPoster";
import MovieSliderItemBackdrop from "../MovieSliderItem/MovieSliderItemBackdrop";

export default function MovieList(props) {
  const [movieData, setMovieData] = useState("");
  const [movieDetail, setMovieDetail] = useState("");

  useEffect(() => {
    if (!movieData) return;
    callApiDetailMovie();
  }, [movieData]);

  // Hàm xử lý thông tin khi click vào movie
  const getMovieData = (data) => {
    if (data.id === movieData.id) {
      setMovieDetail((prevState) => {
        return { ...prevState, isShow: !prevState.isShow };
      });
      return;
    }

    setMovieData(data);
  };

  // Hàm call API chi tiết phim để truyền vào modal
  const callApiDetailMovie = () => {
    const promise = Axios({
      url: `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=${API_KEY}`,
      method: "GET",
    });
    promise
      .then((res) => {
        // trường hợp API trả về 1 mảng rỗng
        if (res.data.results.length === 0) {
          setMovieDetail({
            name: movieData.name || movieData.title,
            first_air_date: movieData.first_air_date || movieData.release_date,
            vote_average: movieData.vote_average,
            overview: movieData.overview,
            backdrop_path: movieData.backdrop_path,
            idMovie: "",
            isShow: true,
          });
          return;
        }

        // Lọc mảng movie data
        const movieArr = res.data.results;
        const movieFilter = movieArr
          .filter((movie) => movie.site.toUpperCase() === "YOUTUBE")
          .filter(
            (movie) =>
              movie.type.toUpperCase() === "TRAILER" ||
              movie.type.toUpperCase() === "TEASER"
          );
        const index = movieFilter.findIndex(
          (movie) => movie.type.toUpperCase() === "TRAILER"
        );

        // Khi tìm dc video theo yêu cầu là TRAILER
        if (index !== -1) {
          setMovieDetail({
            name: movieData.name || movieData.title,
            first_air_date: movieData.first_air_date || movieData.release_date,
            vote_average: movieData.vote_average,
            overview: movieData.overview,
            backdrop_path: movieData.backdrop_path,
            idMovie: movieFilter[index].key || "",
            isShow: true,
          });
          return;
        }

        // Khi tìm ko dc video là TRAILER theo yêu cầu TRAILER trả về phần tử đầu tiên bởi vì mảng chỉ có teaser và trailer
        setMovieDetail({
          name: movieData.name || movieData.title,
          first_air_date: movieData.first_air_date || movieData.release_date,
          vote_average: movieData.vote_average,
          overview: movieData.overview,
          backdrop_path: movieData.backdrop_path,
          idMovie: movieFilter[0].key || "",
          isShow: true,
        });
      })
      .catch((error) => {
        console.log("error", error);

        // Trường hợp API trả về lỗi 404
        setMovieDetail({
          name: movieData.name || movieData.title,
          first_air_date: movieData.first_air_date || movieData.release_date,
          vote_average: movieData.vote_average,
          overview: movieData.overview,
          backdrop_path: movieData.backdrop_path,
          idMovie: "",
          isShow: true,
        });
      });
  };

  // Hàm đóng modal movie detail
  const closeModal = () => {
    setMovieDetail((prevState) => {
      return { ...prevState, isShow: !prevState.isShow };
    });
  };

  // Hàm đóng modal movie detail
  // const closeModalBg = () => {
  //   setMovieDetail((prevState) => {
  //     return { ...prevState, isShow: false };
  //   });
  // };

  return (
    <MovieListSection>
      {/* <MovieItemOriginal
        apiUrl={RESQUEST.fetchNetflixOriginals}
        getMovieData={getMovieData}
      /> */}

      {/* render Slider hình poster */}
      {RESQUESTPOSTER.map((data, index) => {
        return (
          <MovieSliderItemPoster
            title={data.title}
            key={index}
            apiUrl={data.apiUrl}
            getMovieData={getMovieData}
          />
        );
      })}

      {/* render Slider hình Backdrop  */}

      {RESQUESTBACKDROP.map((data, index) => {
        return (
          <MovieSliderItemBackdrop
            title={data.title}
            key={index}
            apiUrl={data.apiUrl}
            getMovieData={getMovieData}
          />
        );
      })}

      {/* <MovieItemTrending
        apiUrl={RESQUEST.fetchTrending}
        getMovieData={getMovieData}
      /> 

      <MovieItemTopRated
        apiUrl={RESQUEST.fetchTopRated}
        getMovieData={getMovieData}
      />

      <MovieItemAction
        apiUrl={RESQUEST.fetchActionMovies}
        getMovieData={getMovieData}
      />

      <MovieItemComedy
        apiUrl={RESQUEST.fetchComedyMovies}
        getMovieData={getMovieData}
      />

      <MovieItemHorror
        apiUrl={RESQUEST.fetchHorrorMovies}
        getMovieData={getMovieData}
      />

      <MovieItemRomance
        apiUrl={RESQUEST.fetchRomanceMovies}
        getMovieData={getMovieData}
      />

      <MovieItemDocumentaries
        apiUrl={RESQUEST.fetchDocumentaries}
        getMovieData={getMovieData}
      /> */}

      <MovieDetail movieDetail={movieDetail} closeModal={closeModal} />
    </MovieListSection>
  );
}

const MovieListSection = styled.section`
  padding-bottom: 32px;
`;

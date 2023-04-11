import Axios from "axios";
import React, { useEffect, useState } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultList from "../../components/SearchResult/ResultList";
import { API_KEY, API_PREFIX } from "../../utils/API";

const Search = (props) => {
  const [searchData, setSearchData] = useState("");
  const [movieData, setMovieData] = useState("");
  const [movieDetail, setMovieDetail] = useState("");

  useEffect(() => {
    if (!movieData) return;
    callApiDetailMovie();
  }, [movieData]);

  // Hàm lấy key word từ form input và call api
  const getSearchKeyWord = (data) => {
    const promise = Axios({
      url: `${API_PREFIX}/search/movie?api_key=${API_KEY}&language=en-US&query=${data}&page=1`,
      method: "GET",
    });
    promise
      .then((res) => {
        setSearchData(res.data.results);
      })
      .catch((error) => {
        console.log("Search error", error);
      });
  };

  // Hàm xử lý thông tin khi click vào movie
  const getMovieData = (data) => {
    if (data.id === movieData.id) {
      setMovieDetail((prevState) => {
        return { ...prevState, isShow: !prevState.isShow };
      });
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

  return (
    <div className="app bg_height">
      <NavBar />
      <SearchForm getSearchKeyWord={getSearchKeyWord} />
      <ResultList getMovieData={getMovieData} searchData={searchData} />
      <MovieDetail movieDetail={movieDetail} closeModal={closeModal} />
    </div>
  );
};

export default Search;

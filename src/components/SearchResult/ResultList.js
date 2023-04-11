import React from "react";
import styled from "styled-components";

export default function ResultList(props) {
  const renderMovieList = () => {
    if (!props.searchData) return;

    return props.searchData.map((movie, index) => {
      return (
        <div
          onClick={() => {
            props.getMovieData(movie);
          }}
          key={movie.id}
          className="result_item_poster"
        >
          <img
            alt={movie.name || "Image"}
            src={`https://image.tmdb.org/t/p/w200${
              movie.poster_path || movie.backdrop_path
            }`}
          />
        </div>
      );
    });
  };
  return (
    <ResultSection>
      <h1>Search Result</h1>

      {/* Kiểm tra xem có phải mảng rỗng hay ko */}
      {props.searchData.length === 0 && typeof props.searchData === "object" ? (
        <p>Không tìm thấy kết quả!!</p>
      ) : (
        ""
      )}

      {/* render mảng kết quả tìm dc */}
      <div className="result_list_container">{renderMovieList()}</div>
    </ResultSection>
  );
}

const ResultSection = styled.section`
  padding: 0 20px;
  color: #fff;

  p {
    margin-top: 12px;
    padding-left: 12px;
    color: red;
    font-size: 20px;
  }

  .result_list_container {
    display: grid;
    grid-template-columns: repeat(6, 200px);
    justify-content: space-between;
    gap: 24px 12px;
    padding: 24px 20px;
    transition: all 0.3s linear;

    .result_item_poster {
      height: 100%;
      width: 100%;
      cursor: pointer;
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.1);
        opacity: 1 !important;
      }

      img {
        height: 100%;
        width: 100%;
      }
    }

    &:hover .result_item_poster {
      opacity: 0.8;
    }
  }
`;

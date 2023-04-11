import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { CloseButton } from "../StyledComponents/Button/Button";

const opts = {
  height: "350px",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

export default function MovieDetail(props) {
  return (
    <MovieDetailSection className={props.movieDetail.isShow ? "" : "hidden"}>
      <div className="content">
        <h1 className="content_title">{props.movieDetail.name || ""}</h1>
        <hr />
        <h3 className="content_release">
          Release Date : {props.movieDetail.first_air_date || ""}
        </h3>
        <h3 className="content_voted">
          Vote :{" "}
          {props.movieDetail.vote_average
            ? props.movieDetail.vote_average.toFixed(1)
            : props.movieDetail.vote_average}
          /10
        </h3>
        <p className="content_description">
          {props.movieDetail.overview ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque omnis sint nisi? Facere omnis consequuntur culpa ab accusantium maiores at quidem et sapiente tempora autem"}
        </p>
      </div>
      <div className="video">
        {props.movieDetail.idMovie ? (
          <YouTube videoId={props.movieDetail.idMovie || ""} opts={opts} />
        ) : (
          <img
            alt={props.movieDetail.name}
            src={
              !props.movieDetail.backdrop_path
                ? ""
                : `https://image.tmdb.org/t/p/w500/${props.movieDetail.backdrop_path}`
            }
          ></img>
        )}
      </div>
      <CloseButton onClick={props.closeModal}>X</CloseButton>
    </MovieDetailSection>
  );
}

const MovieDetailSection = styled.section`
  position: fixed;
  bottom: 12px;
  left: 0;
  right: 0;
  background-color: #212121;
  color: #fff;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  padding: 52px 44px 20px;
  margin: 0 60px;
  z-index: 200;

  .content {
    flex-basis: 45%;
    padding: 12px 0 0 0;
    .content_title {
      margin-bottom: 16px;
      font-size: 30px;
      font-weight: 500;
    }

    hr {
      height: 4px;
      background-color: #aeaeae;
      border: none;
      margin-bottom: 16px;
    }

    .content_release,
    .content_voted {
      font-size: 20px;
      font-weight: 500;
    }

    .content_voted {
      margin-bottom: 16px;
    }

    .content_description {
      font-size: 16px;
      font-weight: 400;
    }
  }

  .video {
    flex-basis: 50%;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

import styled from "styled-components";

export const MovieSlider = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: ${(props) => {
    const imgSize = props.poster ? "250px" : "150px";
    return `repeat(${props.movieData.length}, ${imgSize})`;
  }};
  height: ${(props) => (props.poster ? "180px" : "275px")};
  padding: 24px 20px 16px;
  overflow-y: auto;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: all 0.3s linear;

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
    height: 4px;
    border-radius: 100px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 100px;
    background-color: #b2b2b2;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
    cursor: pointer;
  }

  &:hover .movie_item {
    opacity: 0.7;
  }

  .movie_item {
    transform: scale(1);
    transition: all 0.3s linear;
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 2;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

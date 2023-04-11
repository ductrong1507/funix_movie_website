import React, { useRef } from "react";
import styled from "styled-components";

export default function SearchForm(props) {
  const inputRef = useRef();

  const clickSearchHandel = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") {
      alert("Vui lòng nhập từ khóa muốn tìm kiếm!");
      return;
    }

    props.getSearchKeyWord(inputRef.current.value);
  };

  const clickResetHandel = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  return (
    <SearchSection>
      <form>
        <div className="form_group">
          <input
            ref={inputRef}
            type="text"
            className="form_control"
            placeholder="Search..."
          />

          <div className="search_icon">
            <svg
              className="svg-inline--fa fa-search fa-w-16"
              fill="#ccc"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </div>
        </div>

        <hr />

        <div className="btn_section">
          <button
            type="submit"
            onClick={clickSearchHandel}
            className="search_btn"
          >
            Search
          </button>
          <button
            type="submit"
            onClick={clickResetHandel}
            className="reset_btn"
          >
            Reset
          </button>
        </div>
      </form>
    </SearchSection>
  );
}

const SearchSection = styled.section`
  padding: 100px 0;

  form {
    background-color: #fff;
    width: 500px;
    margin: 0 auto;

    .form_group {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 4px;
      padding: 0 12px;
    }

    .search_icon {
      height: 100%;
      display: flex;

      svg {
        width: 24px;
      }
    }

    .form_control {
      padding: 16px 0;

      display: block;
      border: none;
      width: 100%;
      font-size: 16px;
      font-weight: 500;

      &:focus {
        outline: none;
      }
    }

    hr {
      height: 2px;
      background-color: #00bbec;
      border: none;
    }

    .btn_section {
      display: flex;
      flex-direction: row-reverse;
      gap: 12px;
      padding: 36px 16px;

      button {
        border: none;
        padding: 12px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s linear;
        font-weight: bold;
        opacity: 1;
        transition: all 0.2s ease-in;

        &:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }
      }

      .reset_btn {
        background-color: #fff;
        color: #6c6c6c;
      }

      .search_btn {
        background-color: #00bbec;
        color: #fff;
      }
    }
  }
`;

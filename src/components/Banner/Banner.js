import Axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import { RESQUEST } from "../../utils/API";

export default function Banner(props) {
  const [bannerMovie, setBannerMovie] = useState({
    id: "",
    backdrop_path: "",
    name: "",
    overview: "",
  });

  // Hàm call API
  const fetchNetflixOriginals = () => {
    const promise = Axios({
      url: RESQUEST.fetchNetflixOriginals,
      method: "GET",
    });
    promise
      .then((res) => {
        // const randomNumber = 20;
        // console.log("res.data.results[", res.data.results[randomNumber]);

        const randomNumber = Math.floor(
          Math.random() * res.data.results.length - 1
        );
        setBannerMovie({
          id: res.data.results[randomNumber].id,
          backdrop_path:
            res.data.results[randomNumber].backdrop_path ||
            res.data.results[randomNumber].poster_path,
          name: res.data.results[randomNumber].name,
          overview:
            res.data.results[randomNumber].overview ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque omnis sint nisi? Facere omnis consequuntur culpa ab accusantium maiores at quidem et sapiente tempora autem,",
        });
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
    <section id={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.banner_image}>
        <img
          alt={bannerMovie.name}
          src={`https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}`}
        />
      </div>

      <div className={styles.banner_box}>
        <h1 className={styles.banner_heading}>{bannerMovie.name}</h1>
        <div className={styles.banner_btn}>
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className={styles.banner_content}>
          <p>{bannerMovie.overview}</p>
        </div>
      </div>
    </section>
  );
}

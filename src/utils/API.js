export const API_KEY = "9e9dc25750a744f9e8dd1e267fb1dc94";
export const API_PREFIX = "https://api.themoviedb.org/3";
export const LINK_IMG_PREFIX = "https://image.tmdb.org/t/p/original";

export const RESQUEST = {
  fetchTrending: `${API_PREFIX}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${API_PREFIX}/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `${API_PREFIX}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const RESQUESTPOSTER = [
  {
    title: "Original",
    apiUrl: `${API_PREFIX}/discover/tv?api_key=${API_KEY}&with_network=123`,
  },
];

export const RESQUESTBACKDROP = [
  {
    title: "Xu Hướng",
    apiUrl: `${API_PREFIX}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Xếp Hạng Cao",
    apiUrl: `${API_PREFIX}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Hành Động",
    apiUrl: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Hài",
    apiUrl: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Kinh Dị",
    apiUrl: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Lãng mạn",
    apiUrl: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Tài Liệu",
    apiUrl: `${API_PREFIX}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

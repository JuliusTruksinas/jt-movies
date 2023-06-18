export const requestToServerBaseUrl = "https://jt-movies.onrender.com";

export const requestOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjg0ZWY4YWVhNTJhN2Y5YjEwNTBiYWViNzAyMTY0ZSIsInN1YiI6IjY0OGEyYzA2ZTM3NWMwMDBhY2M3YzI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EkpVDC2I8AwxGpQZoHXYu62agExi25TxqjHXXIp25KA",
  },
};

export const baseImageUrl = "https://image.tmdb.org/t/p/w1280";

export const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const baseImdbUrl = "https://www.imdb.com/title/";

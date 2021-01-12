import axios from "axios";

export const getLastComic = () => {
  return axios.get(`http://localhost:8080/info.0.json`);
};

export const getComicById = ( comicId ) => {
  return axios.get(`http://localhost:8080/${comicId}/info.0.json`);
};
// const proxyUrl = "https://cors-anywhere.herokuapp.com";

// export const getLastComic = () => {
//   return axios.get(`${proxyUrl}/https://xkcd.com/info.0.json`);
// };

// export const getComicById = ( comicId ) => {
//   return axios.get(`${proxyUrl}/https://xkcd.com/${comicId}/info.0.json`);
// };

const baseUrl = "https://api.edamam.com/search";
const apiId = "app_id=";
const apiKey = "app_key=";

// paths
/*
    query = Search Query
*/
export const baseSearchUrl = (query) => {
  return `${baseUrl}?q=${query}&${apiId}${process.env.REACT_APP_NOT_SECRET_ID}&${apiKey}${process.env.REACT_APP_NOT_SECRET_API}`;
};
/*
    query = Search Query
    from = from number results
    to = + 10
*/
export const moreSearchUrl = (query, from, to) => {
  return `${baseUrl}?q=${query}&from=${from}&to=${to}&${apiId}${process.env.REACT_APP_NOT_SECRET_ID}&${apiKey}${process.env.REACT_APP_NOT_SECRET_API}`;
};

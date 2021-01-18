const baseUrl = "https://api.edamam.com/search";
const apiId = "app_id=00b90847";
const apiKey = "app_key=0b8f23d9bccff91819b96789a03741e3";

// paths
/*
    query = Search Query
*/
export const baseSearchUrl = (query) => {
  return `${baseUrl}?q=${query}&${apiId}&${apiKey}`;
};

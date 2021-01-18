const baseUrl = "https://api.edamam.com/search";
const apiId = "";
const apiKey = "";
// paths
/*
    query = Search Query
*/
export const baseSearchUrl = (query) => {
  return `${baseUrl}?q=${query}&${apiId}&${apiKey}`;
};

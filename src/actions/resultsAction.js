import axios from "axios";
import { baseSearchUrl } from "../Api";

// First Search
export const searchRecipes = (recipe_name) => async (dispatch) => {
  const recipesResults = await axios.get(baseSearchUrl(recipe_name));
  dispatch({
    type: "GET_RESULTS",
    payload: {
      results: recipesResults.data.hits,
      query: recipesResults.data.q,
      currentPage: recipesResults.data.to,
      more: recipesResults.data.more,
      count: recipesResults.data.count,
      isLoading: false,
    },
  });
};
// More Search
/*
export const MoreRecipes = (recipe_name, from, to) => async (dispatch) => {
  const recipesResults = await axios.get(moreSearchUrl(recipe_name, to));
  dispatch({
    type: "GET_MORE",
    payload: {
      results: recipesResults.data.hits,
      query: recipesResults.data.q,
      currentPage: recipesResults.data.to,
      more: recipesResults.data.more,
      isLoading: false,
    },
  });
};
*/

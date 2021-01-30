const initState = {
  results: {},
  query: "",
  previousPage: 0,
  currentPage: 0,
  more: false,
  count: 0,
  isLoading: false,
};

const resultReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_RESULTS":
      return {
        ...state,
        results: action.payload.results,
        query: action.payload.query,
        previousPage: state.currentPage,
        currentPage: action.payload.currentPage,
        more: action.payload.more,
        count: action.payload.count,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default resultReducer;

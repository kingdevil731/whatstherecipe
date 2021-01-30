const initState = {
  settings: {},
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SETTINGS":
      return {
        settings: action.payload.settings,
      };
    default:
      return {
        ...state,
      };
  }
};

export default settingsReducer;

const MainReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STEP":
      return {
        ...state,
        step: action.payload,
      };
    case "UPDATE_INFO":
      return {
        ...state,
        info: action.payload,
      };
    case "UPDATE_COLOR":
      return {
        ...state,
        color: action.payload,
      };

      case "UPDATE_TITLE":
        return {
          ...state,
          title: action.payload,
        };
    default:
      return state;
  }
};

export default MainReducer;

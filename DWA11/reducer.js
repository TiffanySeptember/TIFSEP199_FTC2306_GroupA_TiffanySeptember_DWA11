const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUMBERS":
      return {
        ...state,
        value: state.value + 1,
      };
    case "SUBTRACT_NUMBERS":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RESET_VALUE":
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

export default reducer;

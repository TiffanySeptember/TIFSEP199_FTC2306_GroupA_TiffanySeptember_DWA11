/**
 *
 * @param {currentValue: number, numberToAdd: number} props
 * @returns {payload: {currentValue, numberToAdd}, type: string}
 */
export const addOne = () => {
  return {
    type: "ADD_NUMBERS",
  };
};

export const subtractOne = () => {
  return {
    type: "SUBTRACT_NUMBERS",
  };
};

export const resetValue = () => {
  return {
    type: "RESET_VALUE",
  };
};

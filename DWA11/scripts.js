import { addOne, subtractOne, resetValue } from "./actions.js";
import { subscribe, dispatch } from "./store.js";

subscribe((prev, next) => {
  console.log("next", next);
});

dispatch(addOne());
dispatch(addOne());
dispatch(addOne());
dispatch(subtractOne());
dispatch(addOne());
dispatch(subtractOne());
dispatch(resetValue());
dispatch(addOne());

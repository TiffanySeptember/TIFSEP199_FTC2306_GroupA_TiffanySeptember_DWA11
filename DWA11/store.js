import reducer from "./reducer.js";

const states = [{ value: 0 }];
const subscribers = [];

export const getState = () => Object.freeze({ ...states[0] });

export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);
  subscribers.forEach((subscription) => subscription(prev, next));
  states.unshift(next);
};

export const subscribe = (subscription) => {
  subscribers.push(subscription);
  return () => {
    subscribers.splice(subscribers.indexOf(subscription), 1);
  };
};

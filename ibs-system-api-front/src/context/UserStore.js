import { createStore } from 'redux';

const initialState = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    logs: ""
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;

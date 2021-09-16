const { LOGIN, GETBENEVIT, GETLISTAS } = require("../Constants");
const initialState = {
  login: null,
  Benevits: [],
  Listas: [],
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    case GETBENEVIT: {
      return {
        ...state,
        Benevits: action.payload,
      };
    }
    case GETLISTAS: {
      return {
        ...state,
        Listas: action.payload,
      };
    }
    default:
      return state;
  }
}

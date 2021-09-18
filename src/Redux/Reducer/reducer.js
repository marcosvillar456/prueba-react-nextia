const { LOGIN, GETWALLETS, GETLISTAS } = require("../Constants");
const initialState = {
  login: null,
  Wallets: [],
  Locked: [],
  Unlocked: [],
  token: "",
  succes: null,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        succes: action.payload.succes,
        login: action.payload.data,
        token: action.payload.token,
      };
    }
    case GETWALLETS: {
      return {
        ...state,

        Wallets: action.payload,
      };
    }
    case GETLISTAS: {
      return {
        ...state,
        Locked: action.payload.locked,
        unlocked: action.payload.unlocked,
      };
    }
    default:
      return state;
  }
}

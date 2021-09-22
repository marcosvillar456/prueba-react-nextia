const { LOGIN, GETWALLETS, GETLISTAS, LOGOUT } = require("../Constants");

const initialState = {
  Wallets: [],
  Locked: [],
  Unlocked: [],
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        succes: action.payload.succes,
        login: action.payload.data,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        Wallets: [],
        Locked: [],
        Unlocked: [],
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
        Unlocked: action.payload.unlocked,
      };
    }
    default:
      return state;
  }
}

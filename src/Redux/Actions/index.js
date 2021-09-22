import { LOGIN, GETWALLETS, GETLISTAS, LOGOUT } from "../Constants";
import axios from "axios";

export function login(name, password) {
  return async function (dispatch) {
    try {
      const peticion = await axios.post(
        "https://prueba-api.nextia.mx/api/v1/login",
        { user: { email: name, password: password } }
      );
      const data = await peticion.data;
      localStorage.setItem(
        "TokenAuthorization",
        peticion.headers.authorization
      );
      return dispatch({
        type: LOGIN,
        payload: {
          succes: true,
          data: data,
        },
      });
    } catch (err) {
      return console.log("error");
    }
  };
}

export function Logout() {
  return async function (dispatch) {
    try {
      localStorage.removeItem("TokenAuthorization");
      const peticion = await axios.delete(
        " https://prueba-api.nextia.mx/api/v1/logout"
      );
      const data = peticion.data;
      return dispatch({ type: LOGOUT, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function Listas() {
  return async function (dispatch) {
    try {
      const Token = localStorage.getItem("TokenAuthorization");
      const peticion = await axios.get(
        "https://prueba-api.nextia.mx/api/v1/member/landing_benevits",
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      const data = await peticion.data;

      return dispatch({
        type: GETLISTAS,
        payload: {
          locked: data.locked,
          unlocked: data.unlocked,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getWallets() {
  return async function (dispatch) {
    try {
      const peticion = await axios.get(
        "https://prueba-api.nextia.mx/api/v1/member/wallets"
      );
      const data = await peticion.data;

      return dispatch({
        type: GETWALLETS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

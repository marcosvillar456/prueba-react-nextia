import { LOGIN, GETWALLETS, GETLISTAS } from "../Constants";
import axios from "axios";

export function login(name, password) {
  return async function (dispatch) {
    try {
      const peticion = await axios.post(
        "https://prueba-api.nextia.mx/api/v1/login",
        { user: { email: name, password: password } }
      );
      const data = await peticion.data;
      return dispatch({
        type: LOGIN,
        payload: {
          data: data,
          succes: true,
          token: peticion.headers.authorization,
        },
      });
    } catch (err) {
      return dispatch({
        type: LOGIN,
        payload: { succes: false },
      });
    }
  };
}
export function Listas(token) {
  console.log(token);
  return async function (dispatch) {
    try {
      const peticion = await axios.get(
        "https://prueba-api.nextia.mx/api/v1/member/landing_benevits",
        {
          headers: {
            Authorization: `${token}`,
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

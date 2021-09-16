import { LOGIN, GETBENEVIT, GETLISTAS } from "../Constants";
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
        payload: { data: data, error: false },
      });
    } catch (err) {
      return dispatch({
        type: LOGIN,
        payload: { data: null, error: true },
      });
    }
  };
}
export function getBenevit() {
  return async function (dispatch) {
    try {
      const peticion = await axios.get(
        "https://prueba-api.nextia.mx/api/v1/member/wallets"
      );
      const data = await peticion.data;
      return dispatch({
        type: GETBENEVIT,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getListas() {
  return async function (dispatch) {
    try {
      const peticion = await axios.get(
        "https://prueba-api.nextia.mx/api/v1/member/landing_benevits",
        { user: { email: "prueba@nextia.mx", password: "PruebaNextia2021" } }
      );
      const data = await peticion.data;
      return dispatch({
        type: GETLISTAS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

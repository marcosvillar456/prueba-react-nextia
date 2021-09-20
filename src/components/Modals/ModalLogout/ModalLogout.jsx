import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./Modal.module.css";
import error from "../../../assets/error.svg";
import { Logout } from "../../../Redux/Actions";

export default function ModalLogout({ setActive }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Fragment>
      <div className={styles.modal}>
        <div className={styles.container}>
          <img src={error} alt="icon error" width="40" />
          <div className={styles.title}>Seguro que quieres salir?</div>
          <button
            onClick={() => {
              setActive(false);
            }}
            className={`${styles.button}  ${styles.confirm}`}
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              dispatch(Logout());
              history.push("/");
            }}
            className={`${styles.button}  ${styles.confirm}`}
          >
            Salir
          </button>
        </div>
      </div>
    </Fragment>
  );
}

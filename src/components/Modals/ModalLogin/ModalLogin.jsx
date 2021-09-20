import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import error from "../../../assets/error.svg";
export default function ModalLogin({ set, setActive }) {
  return (
    <Fragment>
      <div className={styles.modal}>
        <div className={styles.container}>
          <img src={error} alt="icon error" width="40" />
          <div className={styles.title}>
            Ocurrio un Error revise su Email o Contraseña porfavor
          </div>

          <button
            onClick={() => {
              setActive(false);
            }}
            className={`${styles.button}  ${styles.confirm}`}
          >
            Reintentar
          </button>
        </div>
      </div>
    </Fragment>
  );
}

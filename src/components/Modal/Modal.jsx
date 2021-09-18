// import styles from "./Modal.module.css";
import styles from "./Modal.module.css";
import React, { Fragment } from "react";

export default function Modal({ set, toggle, active }) {
  return active ? (
    <Fragment>
      <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.title}>Seguro que quiere salir?</div>
          <button className={`${styles.button} ${styles.confirm}`}>
            Confirmar
          </button>
          <button
            onClick={() => set(false)}
            className={`${styles.button} ${styles.cancel}`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Fragment>
  ) : null;
}

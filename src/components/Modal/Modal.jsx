// import styles from "./Modal.module.css";
import { Fragment } from "react";
import "./Modal.css";
import React, { useState } from "react";

export default function Modal(data) {
  const [show, setShow] = useState(data);

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === "modal-card") {
      return;
    }

    setShow(false);
  };

  return (
    <Fragment>
      <div hidden={!show}>
        <div className="modal-background" onClick={() => handleModalClose()}>
          <div className="modal-card"></div>
        </div>
      </div>
    </Fragment>
  );
}

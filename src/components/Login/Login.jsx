import { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";

import styles from "./Login.module.css";
import Modal from "../Modal/Modal";

export function validate(input) {
  let errors = {};
  if (!input.Email) {
    errors.Email = "";
  } else if (!input.password) {
    errors.password = "";
  }
  return errors;
}

export default function Login() {
  const [Input, setInput] = useState({ Email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  let Login = useSelector((state) => state.succes);
  let history = useHistory();

  function handleChange(e) {
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...Input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function shoot() {
    console.log("click");
    setActive(true);
  }

  async function ingresar() {
    if (Object.keys(errors).length === 0) {
      return await dispatch(login(Input.Email, Input.password));
    }
  }
  // eslint-disable-next-line no-unused-expressions
  Login === true ? history.push("/home") : null;

  return (
    <Fragment>
      <div className={styles.form}>
        <input
          type="text"
          id="Email"
          name="Email"
          placeholder="Email"
          className={styles.input}
          value={Input.Email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={Input.password}
          onChange={handleChange}
        />
        <div className={styles.forgotPassword}>
          <span>Olvide mi contraseña</span>
        </div>
        <button
          disabled={
            Input.password && Input.Email !== ""
              ? Object.keys(errors).length === 0
                ? false
                : true
              : true
          }
          className={`${styles.button} ${
            Input.password && Input.Email !== ""
              ? Object.keys(errors).length === 0
                ? styles.active
                : true
              : true
          }`}
          onClick={() => {
            ingresar();
          }}
        >
          Enviar
        </button>
      </div>
      {Login === false ? "Error" : null}
      <div>
        <button onClick={shoot}>Take the shot!</button>
      </div>
      <Modal active={active} set={setActive} />
    </Fragment>
  );
}

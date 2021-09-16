import { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";

import styles from "./Login.module.css";

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
  const dispatch = useDispatch();
  const Login = useSelector((state) => state.login);
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
          className={styles.button}
          onClick={async () => {
            if (Object.keys(errors).length === 0) {
              await dispatch(login(Input.Email, Input.password));
              if (!Login?.data) {
                return history.push("/home");
              }
            }
          }}
        >
          Enviar
        </button>
      </div>
      {Login?.error === true || Login !== null ? "Error" : null}
    </Fragment>
  );
}

import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { login } from "../../Redux/Actions";
import ModalLogin from "../Modals/ModalLogin/ModalLogin";

export function validate(input) {
  let errors = {};
  if (!input.Email) {
    errors.Email = "error Email";
  } else if (!input.Password) {
    errors.Password = "error Password";
  }
  return errors;
}

export default function Login() {
  const [Input, setInput] = useState({ Email: "", Password: "" });
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

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

  async function ingresar(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      const peticion = await dispatch(login(Input.Email, Input.Password));
      peticion === undefined ? setActive(true) : history.push("/home");
    }
  }
  function onKeyUp(e) {
    var keycode = e.keyCode;
    if (keycode === "13") {
      ingresar(e);
    }
  }
  function inputCharacters(event) {
    if (event.keyCode == 13) {
      document.getElementById("Password").focus();
    }
  }
  return (
    <Fragment>
      <form className={styles.form} onSubmit={(e) => ingresar(e)}>
        <input
          type="text"
          id="Email"
          name="Email"
          placeholder="Email"
          className={styles.input}
          value={Input.Email}
          onChange={handleChange}
          onKeyUp={(e) => inputCharacters(e)}
        />
        <input
          className={styles.input}
          type="Password"
          id="Password"
          name="Password"
          placeholder="Password"
          value={Input.Password}
          onChange={handleChange}
          autoComplete="on"
          onKeyUp={(e) => onKeyUp(e)}
        />
        <div className={styles.forgotPassword}>
          <span>Olvide mi contraseña</span>
        </div>
        <button
          disabled={
            Input.Password && Input.Email !== ""
              ? Object.keys(errors).length === 0
                ? false
                : true
              : true
          }
          className={`${styles.button} ${
            Input.Password && Input.Email !== ""
              ? Object.keys(errors).length === 0
                ? styles.active
                : true
              : true
          }`}
          type="submit"
        >
          Enviar
        </button>
      </form>
      {active === true ? (
        <ModalLogin setActive={setActive} active={active} />
      ) : null}
    </Fragment>
  );
}

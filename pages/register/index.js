import React, { useState } from "react";
import mainIcon from "../../public/images/fantasy.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import axios from "axios";
import store from "../../redux/store";
const apiUrl = "http://localhost:3000/api/user/Register";
import { emailReg, passwordReg } from "../../services/validationRegex";

const Register = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //----------Validation Handling----------------
  const [validationError, setValidationError] = useState({
    emailError: false,
    passwordError: false,
  });

  const danger = validationError.emailError ? "text-danger" : null;
  const invalid = validationError.emailError ? "is-invalid" : null;

  function validate(value, type) {
    if (type === "email") {
      if (!emailReg().test(value)) {
        setValidationError({ emailError: true });
      } else {
        setValidationError({ emailError: false });
      }
    } else if (type === "password") {
      if (!passwordReg().test(value)) {
        setValidationError({ passwordError: true });
      } else {
        setValidationError({ passwordError: false });
      }
    }
  }

  //----------------SUBMIT-----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = formInput.password;

    // store.dispatch({
    //   type: "Register",
    //   payload: {
    //     email: formInput.email,
    //     password: formInput.password,
    //   },
    // });
    // console.log(`state: ${JSON.stringify(store.getState())}`);
    if (validationError) {
      await axios.post(apiUrl, formInput, { withCredentials: true });
    } else {
      alert("invalid email or password");
    }
  };

  return (
    <div className={`container pt-4 ${styles.cont}`}>
      <Image src={mainIcon} alt="adventure awaits" width={100} height={100} />

      <h6>Open Legend Character Manager</h6>

      {/* --------INPUTS--------- */}

      <div className={"container"}>
        <form onSubmit={handleSubmit}>
          <div className={"form-group row"}>
            {/* ------------------NAME------------------ */}
            <label htmlFor="name">Profile Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              required
              autoFocus
              className={"form-control"}
              onChange={(e) =>
                setFormInput({ ...formInput, name: e.target.value })
              }
              value={formInput.name}
            />
          </div>
          {/* -----------------------EMAIL---------------------- */}
          <div className={"form-group row"}>
            <label htmlFor="email" className={`form-group row ${danger}`}>
              email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              required
              autoFocus
              className={`form-control ${invalid}`}
              onChange={(e) =>
                setFormInput(
                  { ...formInput, email: e.target.value },
                  validate(e.target.value, "email")
                )
              }
              value={formInput.email}
            />
          </div>
          {/* ------------------------password------------------------- */}
          <div className={"form-group row"}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="pass"
              required
              className={"form-control"}
              onChange={(e) =>
                setFormInput({ ...formInput, password: e.target.value })
              }
              value={formInput.password}
            />
          </div>

          <button type="submit" className={"btn btn-primary"}>
            Register
          </button>
        </form>

        {/* --------------REGISTER & RECOVERY----------------- */}
        <Link href="#" className={styles.items}>
          Already Signed? Login here
        </Link>
      </div>
    </div>
  );
};

export default Register;

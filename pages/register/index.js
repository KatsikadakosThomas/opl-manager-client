import React, { useState } from "react";
import mainIcon from "../../public/images/fantasy.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import axios from "axios";
const apiUrl = "http://localhost:3000/api/user/Register";
import { validate } from "../../services/validationRegex";
import call from "../../services/authService";

const Register = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //----------Validation Handling----------------
  const [showError, setShowError] = useState({
    emailError: false,
    passwordError: false,
    nameError: false,
  });

  //----------------SUBMIT-----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!showError.emailError && !showError.passwordError) {
      await call.register(formInput);
    } else {
      alert("invalid email or password");
    }
  };

  //------------------JSX---------------------------
  return (
    <div className={`container pt-4 ${styles.cont}`}>
      <Image src={mainIcon} alt="adventure awaits" width={100} height={100} />

      <h6>Open Legend Character Manager</h6>

      {/* --------INPUTS--------- */}

      <div className={"container"}>
        <form onSubmit={handleSubmit}>
          <div className={"form-group row"}>
            {/* ------------------NAME------------------ */}
            <label htmlFor="name" className={`form-group row`}>
              Profile Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              required
              autoFocus
              className={`form-control`}
              onChange={function change(e) {
                let value = e.target.value;
                setFormInput({ ...formInput, name: value });
              }}
              value={formInput.name}
            />
          </div>
          {/* -----------------------EMAIL---------------------- */}
          <div className={"form-group row"}>
            <label htmlFor="email" className={`form-group row ${showError.emailError && "text-danger"}`}>
              email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              required
              autoFocus
              autoComplete="off"
              className={`form-control ${showError.emailError && "is-invalid"}`}
              //onChange Change state and validate values
              onChange={function change(e) {
                let value = e.target.value;
                setFormInput({ ...formInput, email: value });
                setShowError(validate(value, "email"));
              }}
              //make the validation dissapear when focus out
              onBlur={(e) => setShowError({ emailError: false })}
              //revalidate values on focus in
              onFocus={(e) => validate(e.target.value, "email")}
              value={formInput.email}
            />
            {/* warning */}
            <span className={`${styles.errorMessage} ${showError.emailError && `${styles.visible}`} `}>Not a valid email</span>
          </div>
          {/* ------------------------PASSWORD------------------------- */}
          <div className={"form-group row"}>
            <label htmlFor="password" className={`form-group row ${showError.passwordError && "text-danger"}`}>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="pass"
              required
              autoComplete="off"
              className={`form-control ${showError.passwordError && "is-invalid"}`}
              //onChange Change input and validate values
              onChange={function change(e) {
                let value = e.target.value;
                setFormInput({ ...formInput, password: value });
                setShowError(validate(value, "password"));
              }}
              //make the validation dissapear when focus out
              onBlur={(e) => setShowError({ passwordError: false })}
              //revalidate values on focus in
              onFocus={(e) => validate(e.target.value, "password")}
              value={formInput.password}
            />
            {/* show validation restrictions */}
            <span className={`${styles.errorMessage} ${showError.passwordError && `${styles.visible}`} `}>
              Min 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
            </span>
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

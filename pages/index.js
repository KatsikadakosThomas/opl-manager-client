import React, { useState } from "react";
import mainIcon from "../public/images/fantasy.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import axios from "axios";
import store from "../redux/store";
const apiUrl = "http://localhost:3000/api/user/login";

const Login = () => {
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    store.dispatch({
      type: "login",
      payload: {
        email: formInput.email,
        password: formInput.password,
      },
    });
    console.log(`state: ${JSON.stringify(store.getState())}`);

    const data = await axios.post(apiUrl, formInput, { withCredentials: true });
    console.log(data);
  };

  return (
    <div className={`container pt-4 ${styles.cont}`}>
      <Image src={mainIcon} alt="adventure awaits" width={100} height={100} />

      <h6>Open Legend Character Manager</h6>

      {/* --------INPUTS--------- */}

      <div className={"form-group"}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            autoFocus
            required
            className={"form-control"}
            onChange={(e) =>
              setFormInput({ ...formInput, email: e.target.value })
            }
            value={formInput.email}
          />

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

          <button type="submit" className={"btn btn-primary"}>
            Submit
          </button>
        </form>

        {/* --------------REGISTER & RECOVERY----------------- */}
        <Link href="#" className={styles.items}>
          No account? Sign up adventurer
        </Link>

        <br />
        <Link href="#" className={styles.items}>
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default Login;

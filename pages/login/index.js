import React from "react";
import mainIcon from "../../public/images/fantasy.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import LoginForm from "../../components/loginForm";

const Login = () => {
  return (
    <div>
      <Image src={mainIcon} alt="adventure awaits" width={200} height={200} />
      <h2>Open Legend Character Manager</h2>
      <LoginForm />
      <p>No account?</p>
      <br />
      <Link href="#">Sign up adventurer</Link>
      <br />
      <Link href="#">Forgot your password?</Link>
    </div>
  );
};

export default Login;

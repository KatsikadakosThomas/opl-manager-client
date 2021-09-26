import React from "react";
import mainIcon from "../public/images/fantasy.jpg";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/loginForm"
import styles from "./index.module.css"




const Login = () => {
  return (
    <div className={`container pt-4 ${styles.cont}`}>
      <Image src={mainIcon} alt="adventure awaits" width={100} height={100} className={styles.items} />
      <h6 className={styles.items}>Open Legend Character Manager</h6>
      <LoginForm />
   
      <Link href="#" className={styles.items} >No account? Sign up adventurer</Link>
  
      
      <br />
      <Link href="#" className={styles.items} >Forgot your password?</Link>
    </div>
  );
};

export default Login;

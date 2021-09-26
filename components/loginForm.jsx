import React, { useState } from "react";
import store from "../redux/store";


const LoginForm = ()=> {

  const [formInput, setFormInput]=useState({email:"",password:""})

  const handleSubmit = (e) => {
    e.preventDefault();


    store.dispatch({
      type: "login",
      payload:{
          email:formInput.email,
          password:formInput.password
      }})
      console.log(`state: ${JSON.stringify(store.getState())}`);
  };

 
    return (
      <div>
        <div className={"form-group"}  >
        <form onSubmit={handleSubmit} >
          <label htmlFor="email">email</label>
          <input id="email" type="email" name="email" placeholder="email" autoFocus 
           className={"form-control"} onChange={e=>setFormInput({...formInput,email:e.target.value})} value={formInput.email}/>

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="pass" 
          className={"form-control"} onChange={e=>setFormInput({...formInput,password:e.target.value})} value={formInput.password}/>

          <button type="submit" className={"btn btn-primary"} >Submit</button>
        </form>
        </div>
      </div>
    );
  }


export default LoginForm;

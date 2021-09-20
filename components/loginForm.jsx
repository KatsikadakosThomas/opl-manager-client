import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="user" autoFocus />

          <label htmlFor="password">Psername</label>
          <input id="password" type="password" placeholder="pass" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;

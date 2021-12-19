import React from "react";

export default class SignInPage extends React.Component {
  signIn() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    let userLogin = localStorage.getItem("login");
    let userPassword = localStorage.getItem("password");

    if (login === "") alert("Enter login");
    else if (password === "") alert("Enter password");
    else if (userLogin === null && userPassword === null) {
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      alert("Welcome aboard! Now you can open your profile");
    } else alert("You are already registered");
  }

  render() {
    return (
      <div class="sign-form">
        <h3>Войти</h3>
        <br />
        <label>Логин</label>
        <br />
        <input type="text" id="login" />
        <br /><br />
        <label>Пароль</label>
        <br />
        <input type="password" id="password" />
        <br />
        <button onClick={() => this.signIn()} id="sign-in">
          Войти
        </button>
      </div>
    );
  }
}

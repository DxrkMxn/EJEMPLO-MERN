import React, { Component } from "react";
import "./AddAlbum.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class LoginPage extends Component {
  state = {
    nombre: "",
    password: "",
  };

  onChangeHandler = (e) => this.setState({ [e.target.nombre]: e.target.value });

  addAlbum = async (e) => {
    e.preventDefault();
    try {
      if (
        (this.refs.nombre.value === "jhusef@me.com" &&
          this.refs.password.value === "123456789") ||
        (this.refs.nombre.value === "admin" &&
          this.refs.password.value === "admin")
      ) {
        localStorage.tokenCRUDMERN = "Bearer 123456789";
        toast("Iniciaste sesión satisfactoriamente", {
          type: toast.TYPE.SUCCESS,
          autoClose: 1000,
        });
        return setTimeout(() => {
          location.pathname = "/";
          //location.reload();
        }, 1000);
      }
      throw true;
    } catch (err) {
      toast("Credenciales incorrectas", {
        type: toast.TYPE.ERROR,
        autoClose: 3000,
      });
    }
  };

  render() {
    return (
      <div className="AddAlbum-Wrapper">
        <h1>Inicia Sesión</h1>
        <form onSubmit={this.addAlbum}>
          <label htmlFor="nombre">Usuario:</label>
          <input
            type="text"
            placeholder="Ingrese el nombre de usuario aquí"
            name="Usuario"
            onChange={this.onChangeHandler}
            ref="nombre"
            className="Add-Album-Input"
            required
            minLength="3"
            maxLength="33"
            id="nombre"
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            placeholder="Ingresa la contraseña aquí"
            name="password"
            onChange={this.onChangeHandler}
            ref="password"
            className="Add-Album-Input"
            required
            minLength="3"
            maxLength="33"
            id="password"
          />

          <button
            type="submit"
            className="Add-Album-Submit fa fa-check"
          ></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default LoginPage;

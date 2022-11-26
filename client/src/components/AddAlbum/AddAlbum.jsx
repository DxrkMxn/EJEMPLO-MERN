import React, { Component } from "react";
import './AddAlbum.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddAlbum extends Component {
  state = {
    nombre: "",
    artista: "",
    genero: "",
    year: "",
    url: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.nombre]: e.target.value });

  addAlbum = async e => {
    e.preventDefault();
    try {
      const newAlbum = await axios.post("/api/albums/", {
          nombre: this.refs.nombre.value,
          artista: this.refs.artista.value,
          genero: this.refs.genero.value,
          year: this.refs.year.value,
          url: this.refs.url.value,
        }
      );
      toast("Álbum " + newAlbum.data.newAlbum.nombre + " creado satisfactoriamente" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
      setTimeout(() => {
        location.pathname = '/';
      }, 1000);
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddAlbum-Wrapper">
        <h1>Agregar Álbumes</h1>
        <form onSubmit={this.addAlbum}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            placeholder="Ingrese el nombre del álbum aquí"
            name="nombre"
            onChange={this.onChangeHandler}
            ref="nombre"
            className="Add-Album-Input"
            required
            minLength="3"
            maxLength="33"
            id="nombre"
          />
          <label htmlFor="artista">Artista:</label>
          <input
            type="text"
            placeholder="Ingrese el artista del álbum aquí"
            name="artista"
            onChange={this.onChangeHandler}
            ref="artista"
            className="Add-Album-Input"
            required
            minLength="3"
            maxLength="33"
            id="artista"
          />
          <label htmlFor="genero">Género:</label>
          <input
            type="text"
            placeholder="Ingrese el genero del álbum aquí"
            name="genero"
            onChange={this.onChangeHandler}
            ref="genero"
            className="Add-Album-Input"
            required
            minLength="3"
            maxLength="33"
            id="genero"
          />
          <label htmlFor="year">Año de lanzamiento:</label>
          <input
            type="text"
            placeholder="Ingrese el año del álbum aquí"
            name="year"
            onChange={this.onChangeHandler}
            ref="year"
            className="Add-Album-Input"
            required
            minLength="3"
            maxLength="33"
            id="year"
          />
          <label htmlFor="url">Portada:</label>
          <input
            type="text"
            placeholder="Ingrese la URL de al portada del álbum aquí"
            name="url"
            onChange={this.onChangeHandler}
            ref="url"
            className="Add-Album-Input"
            required
            minLength="3"
            maxLength="33"
            id="url"
          />
          
          <button type="submit" className="Add-Album-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Album-Reset fa fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddAlbum;

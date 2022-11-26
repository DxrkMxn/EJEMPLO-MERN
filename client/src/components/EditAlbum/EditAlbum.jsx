import React, { Component } from "react";
import './EditAlbum.css';
import axios from "axios";
import { withRouter } from 'react-router'
import { toast, ToastContainer } from "react-toastify";

class EditAlbum extends Component {
  state = {
    id: '',
    nombre: "",
    artista: "",
    genero: "",
    year: "",
    url: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
      let search = this.props.location.search,
        id = search.substring(1, search.length);
      const updateAlbum = await axios(`/api/albums/${id}`);
      const { nombre, artista, genero, year, url } = updateAlbum.data.album;
      this.setState({ id, nombre, artista, genero, year, url });
    } catch (err) {
      this.setState({ response: "Álbum no encontrado!" })
    }
  };

  updateAlbumHandler = async (e) => {
    e.preventDefault();
    try {
      const album = await axios.put(`/api/albums/${this.state.id}`, {
        nombre: this.refs.nombre.value,
        artista: this.refs.artista.value,
        genero: this.refs.genero.value,
        year: this.refs.year.value,
        url: this.refs.url.value,
      });
      toast(album.data.message, { type: toast.TYPE.INFO, autoClose: 3000 });
      setTimeout(() => {
        location.pathname = '/';
      }, 1000);
    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Álbum no encontrado!")
      return <h1>Álbum no encontrado!</h1>
    return (
      <div className="Edit-Album-Wrapper">
        <h1>Editar a {this.state.nombre}</h1>
        <form onSubmit={this.updateAlbumHandler}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            placeholder="Ingrese el nombre del álbum aquí"
            value={this.state.nombre}
            name="nombre"
            onChange={this.onChangeHandler}
            ref="nombre"
            required
            className="Edit-Album-Input"
            id="nombre"
          />
          <label htmlFor="artista">Artista:</label>
          <input
            type="text"
            placeholder="Ingrese el artista del álbum aquí"
            value={this.state.artista}
            name="artista"
            onChange={this.onChangeHandler}
            ref="artista"
            required
            className="Edit-Album-Input"
            id="artista"
          />
          <label htmlFor="genero">Género:</label>
          <input
            type="text"
            placeholder="Ingrese el genero del álbum aquí"
            value={this.state.genero}
            name="genero"
            onChange={this.onChangeHandler}
            ref="genero"
            required
            className="Edit-Album-Input"
            id="genero"
          />
          <label htmlFor="year">Año de lanzamiento:</label>
          <input
            type="text"
            placeholder="Ingrese el año del álbum aquí"
            value={this.state.year}
            name="year"
            onChange={this.onChangeHandler}
            ref="year"
            required
            className="Edit-Album-Input"
            id="year"
          />
          <label htmlFor="url">Portada:</label>
          <input
            type="text"
            placeholder="Ingrese la URL de al portada del álbum aquí"
            value={this.state.url}
            name="url"
            onChange={this.onChangeHandler}
            ref="url"
            required
            className="Edit-Album-Input"
            id="url"
          />

          <button type="submit" className="Edit-Album-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditAlbum);

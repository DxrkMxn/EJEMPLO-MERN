import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Album from "../../components/Album/Album";

class Home extends Component {
  state = {
    data: null,
    allAlbums: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const albums = await axios("/api/albums/");
      this.setState({ data: albums.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeAlbum = async id => {
    try {
      const albumRemoved = await axios.delete(`/api/albums/${id}`);
      const albums = await axios("/api/albums/");
      this.setState({ data: albums.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    let albums;

    if (this.state.data)
      albums =
        this.state.data.albums &&
        this.state.data.albums.map(album => (
          <Album key={album._id} {...album} removeAlbum={this.removeAlbum} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.albums.length)
        return <h1 className="No-Albums">No hay álbumes!</h1>;

    return (
      <div className="Table-Wrapper">
        <h1>Álbumes:</h1>
        <table className="Table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Artista</th>
              <th>Género</th>
              <th>Año de lanzamiento</th>
            </tr>
          </thead>
          <tbody>{albums}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;

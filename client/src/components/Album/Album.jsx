import React, { useState } from 'react';
import './Album.css';
import { Link } from 'react-router-dom';
import ShowAlbum from '../ShowAlbum';


const Album = ({ _id, url, nombre, artista, genero, year, removeAlbum }) => {
  const style = {
    album: {
      maxHeight: '80px',
      cursor: 'pointer'
    }
  }
  const [showModal, setShowModal] = useState(false);
  const [urlAlbum, setUrlAlbum] = useState('');

  return (
    <tr>
      <td>
        <img src={url} style={style.album} onClick={() => {
          setShowModal(true);
          setUrlAlbum(url);
        }}/>
      </td>
      <td>{nombre}</td>
      <td>{artista}</td>
      <td>{genero}</td>
      <td>{year}</td>
      {
        !Boolean(localStorage.tokenCRUDMERN)
          ? <td></td>
          : <td>
            <button onClick={() => removeAlbum(_id)} className="Action-Button fa fa-trash"></button>
            <Link to={{ pathname: '/editar', search: _id }}>
              <button className="Action-Button fa fa-pencil"></button>
            </Link>
          </td>
      }
      {
        showModal
          ? <ShowAlbum url={urlAlbum} showModal={showModal} setShowModal={setShowModal} />
          : <></>
      }
    </tr>
  );
};

export default Album;

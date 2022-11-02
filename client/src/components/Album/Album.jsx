import React from 'react';
import './Album.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Album = ({ _id, nombre, artista, genero, year, removeAlbum }) => {

  return(
    <tr>
      <td>{ nombre }</td>
      <td>{ artista }</td>
      <td>{ genero }</td>
      <td>{ year }</td>
      <td>
        <button onClick={ () => removeAlbum(_id) } className="Action-Button fa fa-trash"></button>
        <Link to={{ pathname: '/editar', search: _id }}>
         <button className="Action-Button fa fa-pencil"></button>
        </Link>
      </td>

    </tr>
  );
};

export default Album;

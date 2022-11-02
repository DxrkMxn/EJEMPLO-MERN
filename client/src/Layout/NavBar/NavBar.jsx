import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">SEGUNDO CORTE - CRUD MERN</h3>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">DASHBOARD</Link>
      <Link to="/agregar" className="NavBar-Link">AGREGAR</Link>
     </div>
   </nav>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className=" flex items-center gap-10 p-10 px-32">
      <img src={logoImage} alt='logo' className='w-20 mr-10'/>
      <ul className="flex space-x-10 font-light text-lg">
        <li>
          <Link to="/" className="text-white">Accueil</Link>
        </li>
        <li>
          <Link to="/about" className="text-white">Prestations</Link>
        </li>
        <li>
          <Link to="/about" className="text-white">Réalisations</Link>
        </li>
        <li>
          <Link to="/about" className="text-white">À propos</Link>
        </li>
        <li>
          <Link to="/about" className="text-white">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

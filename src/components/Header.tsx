import React from 'react';
import headerImage from '../images/header-app.png'

const Header: React.FC = () => {
  return (
    <header className="px-32 text-center h-[500px] mb-48">
      <img src={headerImage} alt='header'  className='w-full'/>
    </header>
  );
};

export default Header;

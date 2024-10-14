import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className='bg-gradiend'>
        <Navbar />
      <Header />
      </div>
      
      <main className="min-h-screen">
        
           {children}
         
        </main>
      <Footer />
    </div>
  );
};

export default Layout;

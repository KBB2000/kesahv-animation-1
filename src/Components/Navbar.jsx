import React from 'react';
import Header from '../Header/Header';
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav>

        <div className="navbar fixed">
            <h1>🐼</h1>
            <ul>
              <li>Emostion</li>
              <li>Manifesto</li>
              <li>Self-awairbess test</li>
              <li>Work With Us</li>
            </ul>
            <button className='sugn-up'>Download App</button>
        </div>
        <Header />
    </nav>
    </>
  );
}

export default Navbar;

import React from 'react'
import './upperbar.css';
import { FaSignOutAlt } from 'react-icons/fa';

const Upperbar = () => {

    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logout');
      };


  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="https://xbui-hlie-qbta.m2.xano.io/vault/MUW8Xu0D/Ziv4zuHXgVt3Jq4E5u_bvoxeLJI/H2Zz2g../512x512.png" alt="Logo" />
      </div>
      <div className="navbar-welcome">
        <h1>Welcome IOO Admin ! ! !</h1>
      </div>
      <div className="navbar-logout">
        <FaSignOutAlt onClick={handleLogout} size={24} cursor="pointer" />
      </div>
    </div>
  )
}

export default Upperbar

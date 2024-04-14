import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import UserDropdown from './UserDropdown/UserDropdown';
import CustomLink from './CustomLink';
import './navbarStyles.css';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const [isSeller, setIsSeller] = useState(false)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // get user data based on id stored in local storage
  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(`http://localhost:5050/users/${localStorage.getItem('userId')}`)

      if (!response.ok) {
        const msg = `An error has occured: ${response.statusText}`
        console.error(msg)
        return
      }
      const userInfo = await response.json()
      if (!userInfo) {
        console.warn(`User with id: ${id} not found`)
        navigate("/")
        return
      }
      setUsername(userInfo.userName)
      setIsSeller(userInfo.isSeller)
    }

    const userId = localStorage.getItem('userId')
    if (userId){
        fetchData()
    }    
  }, [location]);


  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-links">
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/invest">Invest</CustomLink>
        {username ? (
          <div className="navbar-user-section" onClick={toggleDropdown}>
            <FontAwesomeIcon className='user-icon' icon={faUserCircle} />
            <span className="navbar-username-text">{username}</span>
            {isDropdownVisible && <UserDropdown isSeller={isSeller} />}
          </div>
        ) : (
          <CustomLink to="/login" className="navbar-btn">Login</CustomLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

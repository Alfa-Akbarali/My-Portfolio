import React from 'react';
import profile from '../../assets/profile.png';
import { Link } from 'react-router-dom'
import './style_header.scss';


const Header = () => {
  document.addEventListener('contextmenu', event => {
    if (event.target.nodeName === 'IMG') {
      event.preventDefault();
    }
  });
  return (
    <div className='header_container'>
        <div className='partfolio_box' onClick={() => {
            document.getElementById('home').scrollIntoView({behavior: 'smooth'})
          }}>
          <img src={profile} alt="img" />
          <p>Portfolio</p>
        </div>
    
      <div className='rezume_box'>
        <div className='slides_box'>
          <p onClick={() => {
            document.getElementById('home').scrollIntoView({behavior: 'smooth'})
          }}>
            Home
          </p>
          <p onClick={() => {
            document.getElementById('cards').scrollIntoView({behavior: 'smooth'})
          }}> Projects </p>
        </div>
        <Link className='rezume_link' to="/resume">Rezume</Link>
      </div>

    </div>
  )
}

export default Header

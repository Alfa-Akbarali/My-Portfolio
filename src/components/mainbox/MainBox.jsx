import React from 'react'
import './Style_main.scss';
import telegram from '../../assets/telegram_icon.png';
import discord from '../../assets/discord_icon.png'
import github from '../../assets/github.png';
import { Link } from 'react-router-dom';
import my_photo from '../../assets/my_photo.jpg'
const Mainbox = () => {
  document.addEventListener('contextmenu', event => {
    if (event.target.nodeName === 'IMG') {
      event.preventDefault();
    }
  });
  return (
    <div className='mainbox_container' id='home'>
      <div></div>
      <div className='info_box'>
        <h2 className='name'>Hi I'm Akbarali 👋</h2>
        <p className='skill'>Full-Stack developer</p>
        <p className='join_mes'>Join me down below and let's get cracking!</p>
        <div className='image_box'>
          <Link to="https://t.me/alfa_00001"><img src={telegram} alt="img" /></Link>
          <Link to="https://github.com/Alfa-Akbarali"><img src={github} alt="img" /></Link>
          <Link to="https://discordapp.com/users/1148179043859058728"> <img src={discord} alt="img" /></Link>
        </div>
      </div>

      <div className='my_photo_box'>
        <img className='my_photo' src={my_photo} alt="img" />
      </div>
      <div></div>
    </div>
  )
}

export default Mainbox;
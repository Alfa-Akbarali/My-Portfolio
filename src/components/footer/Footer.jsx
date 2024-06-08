import React from 'react'
import './Style_footer.scss'
import telegram from '../../assets/telegram_icon.png';
import discord from '../../assets/discord_icon.png'
import github from '../../assets/github.png';
import { Link } from 'react-router-dom';
import sms_icon from '../../assets/sms_icon.png'
import call_icon from '../../assets/call_icon.png'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='title_box'>
                <p className='text_contact'>Contact us:</p>
                <div className='links_contant'>
                    <Link to="tel:+998910917177">
                        <img className='call_icon' src={call_icon} alt="img" />
                    </Link>
                    <Link to="sms:+998910917177&body=Привет">
                        <img className='sms_icon' src={sms_icon} alt="img" />
                    </Link>
                </div>
            </div>
            <div className='icon_box'>
                <Link to="https://t.me/alfa_00001">
                    <img className='icons' src={telegram} alt="img" />
                </Link>
                <Link to="https://discordapp.com/users/1148179043859058728">
                    <img className='icons' src={github} alt="img" />
                </Link>
                <Link to="https://github.com/Alfa-Akbarali">
                    <img className='icons' src={discord} alt="img" />
                </Link>
            </div>
        </div>
    )
}

export default Footer
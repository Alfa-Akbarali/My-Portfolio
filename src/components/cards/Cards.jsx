import React from 'react';
import './Style_cards.scss';
import { Link } from 'react-router-dom';
import tetris_img from '../../assets/tetris_icon.jpeg'
import pakemon_img from '../../assets/pokemon_icon.jpg'
import yelp_img from '../../assets/yelp_icon.png'
import front_menu from '../../assets/front_resturant.jpg'
import instamer from '../../assets/instamer.jpeg'


const Cards = () => {
    return (
        <div className='cards_container' id='cards'>
            <div className='card_title_box'>
                <h3>Projects</h3>
            </div>
            <div className='card_box'>
                <Link className='cards_links' to='https://mytetromanus.netlify.app'>
                    <img src={tetris_img} alt="img" />
                    <p>Tetris</p>
                </Link>
                <Link className='cards_links' to='https://pokemonbyakbarali.netlify.app'>
                    <img className='link_pfp' src={pakemon_img} alt="img" />
                    <p>Pokemon</p>
                </Link>
                <Link className='cards_links' to='https://yelpbyakbarali.netlify.app'>
                    <img className='link_pfp' src={yelp_img} alt="img" />
                    <p>Yelp</p>
                </Link>
                <Link className='cards_links' to='https://front-restaurant-menu.vercel.app/'>
                    <img src={front_menu} alt="img" />
                    <p>Html Resturant Menu</p>
                </Link>
                <Link className='cards_links' to='https://instammer-akbarali.vercel.app/login'>
                    <img src={instamer} alt="img" />
                    <p>Instagram Clone</p>
                </Link>
                <div className='new_card'>
                    <span>New projects coming soon.. 🤠</span>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Cards;
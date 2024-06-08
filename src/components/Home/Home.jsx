import React from 'react';
import Header from '../header/Header';
import Mainbox from '../mainbox/MainBox';
import Cards from '../cards/Cards';
import './style_home.scss';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div className='home_container'>
        <Header />
        <Mainbox />
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home
import React from 'react';
import './Menu.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner1 from '../banner1/banner1';
import Banner2 from '../banner2/banner2';
import Banner3 from '../banner3/banner3';
import Banner4 from '../banner4/banner4';
import Banner5 from '../banner5/banner5';
import SeeMore from '../seemore/seemore';
import mainBanner from './asset/main-banner.png';

export default function Menu() {
    return (
        <div className="card">
            <Header />
            <div className="banner-container">
                <img src={mainBanner} alt="banner" style={{ width: '100%', height: 'auto' }} />
                <Banner1 />
                <Banner2 />
                <Banner3 />
                <SeeMore />
                <Banner4 />
                <Banner5 />
            </div>
            <Footer />
        </div>
    );
}

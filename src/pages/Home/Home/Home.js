import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
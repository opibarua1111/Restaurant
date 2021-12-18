import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Foods></Foods>
            <Footer></Footer>
        </div>
    );
};

export default Home;
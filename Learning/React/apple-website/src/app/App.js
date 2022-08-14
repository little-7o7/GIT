import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Unicef from '../components/Unicef/Unicef';
import Container from '../components/Container/Container';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

import './App.scss';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Unicef />
            <Container />
            <Carousel />
            <Footer />
        </div>
    );
}

export default App;
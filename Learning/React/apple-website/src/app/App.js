import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

import Navbar from '../components/Navbar/Navbar';
import Unicef from '../components/Unicef/Unicef';

import './App.scss';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Unicef />
            <Carousel />
            <Footer />
        </div>
    );
}

export default App;
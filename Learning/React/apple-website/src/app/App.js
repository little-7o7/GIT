import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Unicef from '../components/Unicef/Unicef';
import ContainersGrid from '../components/ContainersGrid/ContainersGrid'
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

import './App.scss';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Unicef />
            <ContainersGrid log={123}/>
            <Carousel />
            <Footer />
        </div>
    );
}

export default App;
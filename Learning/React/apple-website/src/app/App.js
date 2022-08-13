import React from 'react';
import Footer from '../components/Footer/Footer';

import Navbar from '../components/Navbar/Navbar';
import Unicef from '../components/Unicef/Unicef';

import './App.scss';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Unicef />

            <Footer />
        </div>
    );
}

export default App;
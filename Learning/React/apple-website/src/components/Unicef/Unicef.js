import React from 'react';

import './Unisef.scss';

import arrow from './../../resources/img/Arrow Icon.svg';

const Unicef = () => {
    return (
        <div className='Unicef'>
            <div className="margin_fixed"></div>
            
            <div className="unicef">
                <div className="content">
                    <img className='unicef_logo' src="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_light__dcs7ftrtc88y_large_2x.png" alt="" />
                    <a href="/">
                        <span>Donate to support families affected by the war in Ukraine</span>
                        <img src={arrow} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Unicef;

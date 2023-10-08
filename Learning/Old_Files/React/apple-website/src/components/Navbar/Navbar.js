import React from 'react';

import Links from './Links';

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="links">
                {Links.map(link => {
                    if (link.content === 'text') {
                        return (
                            <a key={link.id} href={link.to}>
                                <span>{link.children}</span>
                            </a>
                        )
                    } else {
                        return (
                            <a key={link.id} href={link.to}>
                                <img src={link.children} alt="" />
                            </a>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default Navbar;

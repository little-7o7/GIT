import React from 'react';

import './Container.scss';

const Container = ({ data }) => {
    const { position, title, description, links, img } = data

    let inlineStyles = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '3008px 624px',
        backgroundPosition: 'center',
    }

    let classes;

    if (position === 'bottom') {
        classes = 'imgPositionBottom'
    } else if (position === 'right') {
        classes = 'imgPositionRight'
    }

    return (
        <div className='Container' style={inlineStyles}>
            <div className={classes}>
                <div className='center'>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <div className="links">
                        {
                            links.map(link => {
                                return <a key={link.id} href={link.to}>{link.text} &rsaquo;</a>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;

import React from 'react';
import Radium, { StyleRoot } from 'radium';

import './MiniContainer.scss';

const MiniContainer = ({ data }) => {
    const { position, text_color, title, description, links, img, img_2x } = data;

    let inlineStyles = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundsize: '1262px 580px',
        backgroundPosition: 'center',
    }

    const style = {
        '@media only screen and (min-width: 2560px)': {
            backgroundImage: `url(${img_2x})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
    };

    let classes;

    if (position === 'top') {
        classes = 'imgPositionTop'
    } else if (position === 'bottom') {
        classes = 'imgPositionBottom'
    }

    if (text_color === '#000') {
        classes = classes + ' black_text'
    } else if (text_color === '#FFF') {
        classes = classes + ' white_text'
    }

    return (
        <StyleRoot>
            <div className='MiniContainer' style={{ ...inlineStyles, ...style }}>
                <div className={classes}>
                    <div className='center'>
                        <h4>{title}</h4>
                        <h5>{description}</h5>
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
        </StyleRoot>
    );
}

export default MiniContainer;
import React from 'react';

import './Admin.scss';
import { BsTelegram, BsInstagram, BsLinkedin, BsGlobe2, BsFacebook, BsGithub, BsWhatsapp } from 'react-icons/bs';

const Admin = (props) => {
    const { full_name, username, email, avatar, birthday, profession, phone_number, social_networks, about_us } = props.adminData;

    return (
        <div className='Admin'>
            <div className="top">
                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="about">
                    <span className='name'>{full_name}</span>
                    <span className='username'>{username}</span>
                    <span className='profession'>{profession}</span>
                    <div className='social_networks'>
                        <a href={social_networks.telegram} className='link'>
                            <BsTelegram size='33px' />
                        </a>
                        <a href={social_networks.whatsapp} className='link'>
                            <BsWhatsapp size='33px' />
                        </a>
                        <a href={social_networks.instagram} className='link'>
                            <BsInstagram size='33px' />
                        </a>
                        <a href={social_networks.facebook} className='link'>
                            <BsFacebook size='33px' />
                        </a>
                        <a href={social_networks.linkedin} className='link'>
                            <BsLinkedin size='33px' />
                        </a>
                        <a href={social_networks.github} className='link'>
                            <BsGithub size='33px' />
                        </a>
                        <a href={social_networks.website} className='link'>
                            <BsGlobe2 size='33px' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="bottom">
                <div className="userLine">
                    <div className="username">Username</div>
                    <div className="username" id='username' onClick={() => navigator.clipboard.writeText(username)}>{username}</div>
                </div>
                <div className="userLine">
                    <div className="full_name">Full Name</div>
                    <div className="full_name" onClick={() => navigator.clipboard.writeText(full_name)}>{full_name}</div>
                </div>
                <div className="userLine">
                    <div className="birthday">Birthday</div>
                    <div className="birthday" onClick={() => navigator.clipboard.writeText(birthday)}>{birthday}</div>
                </div>
                <div className="userLine">
                    <div className="profession">Profession</div>
                    <div className="profession" onClick={() => navigator.clipboard.writeText(profession)}>{profession}</div>
                </div>
                <div className="userLine">
                    <div className="email">E-mail</div>
                    <div className="email" onClick={() => navigator.clipboard.writeText(email)}>{email}</div>
                </div>
                <div className="userLine">
                    <div className="phone_number">Phone</div>
                    <div className="phone_number" onClick={() => navigator.clipboard.writeText(phone_number)}>{phone_number}</div>
                </div>
                <div className="userLine">
                    <div className="about_us">About</div>
                    <div className="about_us" onClick={() => navigator.clipboard.writeText(about_us)}>{about_us}</div>
                </div>
            </div>
        </div >
    );
}

export default Admin;
    
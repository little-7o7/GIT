import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, } from 'react-router-dom';

import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import { useUserAuth } from "../../UserAuthContext";

import './LoginedPanel.scss';
import Logo from './../logo.jpg';
import { HiOutlineLogout } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';
import { Button } from '@chakra-ui/react';
import Admin from './src/Admin/Admin';

const LoginedPanel = (props) => {
    let arr = window.location.pathname.split('/')
    const { user } = useUserAuth();
    const navigator = useNavigate();

    if (user === null) {
        navigator('/admin/login')
    }

    const { email } = user;
    const [admin, setAdmin] = useState({});
    const [loading, setLoading] = useState(true);
    const [navStatus, setNavStatus] = useState(arr[arr.length - 1]);
    const [opacity, setOpacity] = useState('');


    const logOutB = () => {
        navigator('/admin/login');
    }

    const getAdmin = async (id) => {
        setLoading(true);
        const docRef = doc(db, "admins", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            setAdmin(
                {
                    ...docSnap.data(),
                    id: docSnap.id,
                }
            )
            setLoading(false);
        } else {
            // console.log("No such document!");
        }
    }

    const animation = (nav, to) => {
        if (navStatus !== nav) {
            setOpacity('opacity')
            setNavStatus(nav)
            setTimeout(() => {
                navigator(to)
                console.log(navStatus);
            }, 200);
            setTimeout(() => {
                setOpacity('')
            }, 200);
        }
    }

    useEffect(() => {
        getAdmin(`${email}`)
    }, [user])


    return (
        <div className='LoginedPanel'>
            <div className="left">
                <div className="content">
                    <div className="top">
                        <div className="img">
                            <img src={Logo} alt="" />
                        </div>
                        <button className={navStatus === 'home' ? 'activeNavButton' : ''} onClick={() => animation('home', 'home')}>
                            <div className="button">
                                <div className='radius'></div>
                                <span className="text">Buttons</span>
                            </div>
                        </button>
                    </div>
                    <div className="bottom">
                        <button className={navStatus === 'logined' ? 'activeNavButton' : ''} onClick={() => animation('logined', '')}>
                            <div className="user button">
                                <div className='radius'>
                                    <RiAdminLine color='white' size='20px' />
                                </div>
                                <span className="text">{loading ? 'Loading...' : admin.username}</span>
                            </div>
                        </button>
                        <div className="logOut button" tabIndex='0' onClick={logOutB}>
                            <div className='radius'>
                                <HiOutlineLogout color='white' size='20px' />
                            </div>
                            <span className="text">Выход</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <div className={`container ${opacity}`}>
                        {loading ? '' :
                            <Routes>
                                <Route path="/" element={<Admin adminData={admin} />} />
                                <Route path="/home" element={'sadfasf'} />
                            </Routes>
                        }       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginedPanel;

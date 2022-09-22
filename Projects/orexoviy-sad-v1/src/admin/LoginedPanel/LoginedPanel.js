import React, { useState, useEffect, CSSProperties } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { Helmet } from "react-helmet";

import { db } from './../firebase';
import { doc, getDoc } from "firebase/firestore";
import { useUserAuth } from "./../UserAuthContext";

import './LoginedPanel.scss';
import favicon from '../../assets/img/favicon.png'
import Logo from './../logo.jpg'

import SyncLoader from "react-spinners/SyncLoader";

import { HiOutlineLogout } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';
import { IoReorderThree } from 'react-icons/io5';

import Admin from './src/Admin/Admin';
import Orders from './src/Orders/Orders';

const LoginedPanel = (props) => {
    const arr = window.location.href.split("/")
    const { user } = useUserAuth();
    const navigator = useNavigate();

    if (user === null) {
        navigator('/admin/login')
    }

    const [admin, setAdmin] = useState({});
    const [loading, setLoading] = useState(true);
    const [loadingData, setLoadingData] = useState(true);
    const [navStatus, setNavStatus] = useState(`${arr[arr.length - 1]}`);

    const duration = 200;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        visibility: 'hidden'
    }

    const transitionStyles = {
        entering: { opacity: 1, visibility: 'visible' },
        entered: { opacity: 1, visibility: 'visible' },
        exiting: { opacity: 0, visibility: 'hidden' },
        exited: { opacity: 0, visibility: 'hidden' },
    };

    const logOutB = () => {
        setLoading(false)
        setTimeout(() => {
            navigator('/admin/login');
        }, duration * 2);
    }

    const getAdmin = async (id) => {
        setLoadingData(true);
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
            setLoadingData(false);
        } else {
            // console.log("No such document!");
        }
    }

    const animation = (nav, to) => {
        if (navStatus !== nav) {
            setLoading(false)
            setNavStatus(nav)
            setTimeout(() => {
                navigator(to)
                // console.log(navStatus);
            }, duration);
            setTimeout(() => {
                setLoading(true)
            }, duration);
        }
    }

    useEffect(() => {
        getAdmin(`${user.email}`)
    }, [user])

    const spinner: CSSProperties = {
        display: "block",
        borderColor: "red",
    };

    return (
        <div className='LoginedPanel'>
            <Helmet>
                <title>Logined</title>
                <link rel="icon" href={favicon} />
            </Helmet>
            <div className="left">
                <div className="content">
                    <div className="top">
                        <div className="img">
                            <img src={Logo} alt="" />
                        </div>
                        <button className={navStatus === 'orders' ? 'activeNavButton' : ''} onClick={() => animation('orders', 'orders')}>
                            <div className="button">
                                <div className='radius'>
                                    <IoReorderThree color='white' size='20px' />
                                </div>
                                <span className="text">Заказы</span>
                            </div>
                        </button>
                        <button className={navStatus === 'addItem' ? 'activeNavButton' : ''} onClick={() => animation('addItem', 'addItem')}>
                            <div className="button">
                                <div className='radius'>
                                    <IoReorderThree color='white' size='20px' />
                                </div>
                                <span className="text">addItem</span>
                            </div>
                        </button>
                        <button className={navStatus === 'catalog' ? 'activeNavButton' : ''} onClick={() => animation('catalog', 'catalog')}>
                            <div className="button">
                                <div className='radius'>
                                    <IoReorderThree color='white' size='20px' />
                                </div>
                                <span className="text">catalog</span>
                            </div>
                        </button>
                    </div>
                    <div className="navBottom">
                        <button className={navStatus === 'logined' ? 'activeNavButton' : ''} onClick={() => animation('logined', '')}>
                            <div className="user button">
                                <div className='radius'>
                                    <RiAdminLine color='white' size='20px' />
                                </div>
                                <span className="text">{loadingData ? <SyncLoader color='rgba(44, 159, 61, 1)' loading={loading} cssOverride={spinner} size={7} /> : admin.username}</span>
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
                    <Transition in={loading} timeout={duration}>
                        {state => (
                            <div className={`container`} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                {loadingData ? <div className='spinnerDiv'><SyncLoader color='rgba(44, 159, 61, 1)' loading={loadingData} cssOverride={spinner} size={15} /></div>
                                    :
                                    <Routes>
                                        <Route path="" exact element={<Admin adminData={admin} />} />
                                        <Route path="/orders" exact element={<Orders />} />
                                        <Route path="/addItem" exact element={'addItem'} />
                                        <Route path="/catalog" exact element={'catalog'} />
                                        <Route path="*" element={<Navigate to="" replace />} />
                                    </Routes>
                                }
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
        </div>
    );
}

export default LoginedPanel;

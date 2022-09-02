import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useUserAuth } from "../../UserAuthContext";
import { doc, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate, Route, Routes } from 'react-router-dom';

import './LoginedPanel.scss';
import Logo from '../logo.jpg'

import LoginedPanelNavbar from '../LoginedPanelNavbar/LoginedPanelNavbar';

const LoginedPanel = () => {
    const { user, logOut } = useUserAuth();
    const [admins, setAdmins] = useState()
    const [admin, setAdmin] = useState()
    const navigator = useNavigate()

    useEffect(() => {
        (async function () {
            // // ! get items
            // const querySnapshot = await getDocs(collection(db, "admins"));
            // setAdmins(
            //     querySnapshot.docs.map((doc) => ({
            //         id: doc.id,
            //         ...doc.data(),
            //     }))
            // );


            // ! get item
            const docRef = doc(db, "admins", 'munisxonovmaxmudxon@gmail.com');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log(docSnap.id, docSnap.data());
                setAdmin(
                    {
                        id: docSnap.id,
                        ...docSnap.data(),
                    }
                )
            } else {
                console.log("No such document!");
            }
        }());
    }, [])

    if (user === null) {
        navigator('/admin/login')
    } else {
        return (
            <>
                <Routes>
                    <Route path="/" element={
                        <LoginedPanelNavbar admin={admin} admins={admins}>

                        </LoginedPanelNavbar>
                    } />
                </Routes>
            </>
        );
    }
}

export default LoginedPanel;

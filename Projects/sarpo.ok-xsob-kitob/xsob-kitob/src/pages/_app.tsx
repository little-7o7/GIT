import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from "../contexts/Auth";
import PrivateRoute from '../contexts/PrivateRoute';

import { Provider } from 'react-redux';
import { store } from '../app/store';

import RealtimeGetReq from '../hooks/RealtimeGetReq';

export default function App({ Component, pageProps }: AppProps) {
    const [authTokens, setAuthTokens] = useState();
    const router = useRouter();

    useEffect(() => {
        setAuthTokens(localStorage.getItem("tokens"))
    }, [])

    const setTokens = (data: any) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    };

    const handleLogout = () => {
        localStorage.removeItem("tokens");
        setAuthTokens("");
        router.push('/login')
    };

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, handleLogout }}>
            <Provider store={store}>
                <Component {...pageProps} />
                <RealtimeGetReq />
            </Provider>
            <PrivateRoute />
        </AuthContext.Provider>
    )
}

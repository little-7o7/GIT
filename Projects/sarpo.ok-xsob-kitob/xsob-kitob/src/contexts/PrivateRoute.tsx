import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from "./Auth";

const PrivateRoute = () => {
    const { authTokens } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (authTokens === null) {
            router.push('/login')
        }
    }, [authTokens])

    return (<></>)
}

export default PrivateRoute;
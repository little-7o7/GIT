import { createContext, useContext } from 'react';

interface CurrentUserContextType {
    authTokens: any
    setAuthTokens: any
    handleLogout: any
}

export const AuthContext = createContext<CurrentUserContextType | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

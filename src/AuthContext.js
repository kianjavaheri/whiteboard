import React, { useContext, useState } from 'react'
import { auth } from './firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContext({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const value = {
        currentUser
    }

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    return (
    <div>
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    </div>
    )
}

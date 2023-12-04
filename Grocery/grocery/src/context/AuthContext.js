import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'; // Import auth as a named export


export const AuthContext = createContext(); // Create the context here

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

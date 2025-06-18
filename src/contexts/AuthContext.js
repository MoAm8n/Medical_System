import React, { createContext, useEffect, useState, useContext } from 'react'
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // login new 
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    function logout(){
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext
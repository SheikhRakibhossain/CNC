import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(false)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(false)
    }

    const signOut =()=>{
        return signOut(auth);
    }
    // user observer created
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('Logged user staying on state observer', loggedUser);
            setUser(loggedUser)
        })
        return ()=>{
            return unsubscribe()
        }


    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        signOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useState } from 'react'
import App from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth/cordova';

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const authInfo = {
        user,
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
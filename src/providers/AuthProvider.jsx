import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,   signInWithPopup,   signOut, updateProfile } from "firebase/auth";

import PropTypes from 'prop-types';
import app from "../firebase/firebase.config"; 

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   
    const googleProvider =  new GoogleAuthProvider();
    const githubProvider =  new GithubAuthProvider();
    // google sign in 
    const signInwithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // github sign in 
    const signInwithGithub = () =>{
        setLoading(true);
        return  signInWithPopup(auth, githubProvider)
        
    }
    
    const creatUser = (email, password, name, photo) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { user } = userCredential;
                // Update the user's display name and photoURL
                return updateProfile(user, { displayName: name, photoURL: photo })
                    .then(() => {
                        setUser(user);
                        setLoading(false);
                        return user;
                    })
                    .catch((error) => {
                        console.error("Error updating user profile: ", error);
                        setLoading(false);
                        throw error;
                    });
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };
    

    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the state changed', currentUser);
            setUser(currentUser);

            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const logout = () => {
        setLoading(true);

        return signOut(auth);
    }

    const signIn = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    }
    console.log('wait for user', user)
    const authInfo = {
        user,
        creatUser,
        logout,
        signIn,
        loading,
        signInwithGoogle,
        signInwithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.array,
}
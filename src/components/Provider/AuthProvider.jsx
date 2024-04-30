import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from "../FireBase/FireBase.config.init";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";




export const AuthContext = createContext(null);

const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // user Create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // user Log In
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // google Login
    const singWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // github login
    const singWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    // logOut

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // Update Profile
    const userUpdateProfile = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        })
    }


    //  user Manage 
    useEffect(() => {
        const unSub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

            // console.log('ooooooooo', currentUser)
        });
        return () => {
            unSub()
        }
    }, [])


    const authInfo = { user, loading, signInUser, createUser, logOut, singWithGoogle, singWithGithub ,userUpdateProfile}
    // console.log('user',user)





    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    )
}





AuthProvider.propTypes = {
    children: PropTypes.node
}
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../firebase/firebase.auth";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google login
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    // Logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return {
        user,
        error,
        isLoading,
        setIsLoading,
        logout,
        signInWithGoogle,
    }

}

export default useFirebase;

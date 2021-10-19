import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);



    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                setError('');
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    };


    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false)
        });
    }, [auth]);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    };

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return {
        handleGoogleLogin,
        user,
        error,
        isLoading,
        handleGithubLogin,
        handleLogout,
        handleUserRegister,
        handleUserLogin,
    };
};

export default useFirebase;
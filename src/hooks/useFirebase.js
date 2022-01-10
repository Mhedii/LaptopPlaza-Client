import initializeAuthentication from "../Firebase/firebase.initialize";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

} from "firebase/auth";

import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    // const [error, setError] = useState("");
    const [authError, setAuthError] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const [admin, setAdmin] = useState(false);

    const handleGoogleLogin = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);

            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                const uid = user.uid;
            } else {
                // User is signed out
                // ...
                setUser({})
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
            });
    };

    const handleUserRegister = (email, displayName, password) => {
        createUserWithEmailAndPassword(auth, email, displayName, password)
            .then((result) => {
                console.log(result.user);

            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };

    const hanldeUserInfoRegister = (email, displayName) => {

        fetch("http://localhost:5000/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, displayName }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };




    // const handleGoogleLogin = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             setUser(result.user);
    //             sessionStorage.setItem("email", result.user.email);
    //             // console.log(result.user);
    //             setError("");
    //         })
    //         .catch((error) => setError(error.message));
    // };

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        handleGoogleLogin,
        user,
        handleLogout,
        handleUserRegister, handleUserLogin,
        admin,
        isLoading,
        hanldeUserInfoRegister
    };
};

export default useFirebase;

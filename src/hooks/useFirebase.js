import initializeAuthentication from "../Firebase/firebase.initialize";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
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
            }
        });
    }, []);

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
                hanldeUserInfoRegister(result.user.email, result.user.displayName, result.user.password);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };

    const hanldeUserInfoRegister = (email, displayName, password) => {
        fetch("http://localhost:5000/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, displayName, password }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    // const handleUserRegister = (email, password, name, navigate) => {
    //     setIsLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             setAuthError('');
    //             const newUser = { email, displayName: name };
    //             setUser(newUser);
    //             saveUser(email, name, 'POST');
    //             updateProfile(auth.currentUser, {
    //                 displayName: name
    //             }).then(() => {
    //             }).catch((error) => {
    //             });
    //             navigate('/');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .finally(() => setIsLoading(false));
    // }

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

    };
};

export default useFirebase;

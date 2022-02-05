import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/firebase.init"


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signUpWithEmailPassword = ({ name, email, password }) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email: email, displayName: name };
                setUser(newUser);
                setError('')
                saveUser({ displayName: name, email })

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setError('')
                }).catch((error) => {
                    setError(error.message)
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    const loginWithEmailPassword = ({ email, password }) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser({ name: user.name, email: user.email });
                setError("")
                const dbUser = { displayName: user.displayName, email: user.email }
                saveUser(dbUser)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            });
    }

    const saveUser = (user) => {
        fetch('https://powerful-scrubland-90023.herokuapp.com/contacts', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            } else {
                setUser({})
                setIsLoading(false)
            }
        });
    }, [])
    return {
        signUpWithEmailPassword,
        loginWithEmailPassword,
        signInWithGoogle,
        user,
        logOut,
        isLoading,
        error,
        setIsLoading
    };
};

export default useFirebase;
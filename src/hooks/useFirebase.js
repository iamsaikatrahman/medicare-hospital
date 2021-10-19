import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  // const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);

    // signInWithPopup(auth, googleProvider)
    //   .then((result) => {
    //     console.log(result.user);
    //     setUser(result.user);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   })
    //   .finally(() => setIsLoading(false));
  };
  const signInUsingEmail = (email, password, displayName, photoURL) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      photoURL
    );
    // createUserWithEmailAndPassword(auth, email, password, displayName, photoURL)
    //   .then((result) => {
    //     console.log(result.user);
    //     setUser(result.user);
    //     setUserInfo(displayName, photoURL);
    //     setError("");
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   })
    //   .finally(() => setIsLoading(false));
  };
  const setUserInfo = (displayName, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    }).then((result) => {});
  };
  const processLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    // error,
    isLoading,
    setUserInfo,
    signInUsingGoogle,
    signInUsingEmail,
    processLogin,
    logOut,
  };
};

export default useFirebase;

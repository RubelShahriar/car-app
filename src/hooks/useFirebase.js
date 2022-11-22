import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [admin, setAdmin] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const createUserAccount = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // ...
        setErrors("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to the database
        saveUserToDatabse(name, email, "post");

        //update username to the firebase
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        history.replace("/");
      })
      .catch((error) => {
        setErrors(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const prevPlace = location?.state?.from || "/";
        history.replace(prevPlace);

        setErrors("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = result.user;
        // ...
        //save user to the database
        saveUserToDatabse(user.displayName, user.email, "put");

        setErrors("");
        const prevPlace = location?.state?.from || "/";
        history.replace(prevPlace);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // ...
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`https://tranquil-hollows-86813.herokuapp.com/users/${user.email}`)
      // fetch(`https://tranquil-hollows-86813.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUserToDatabse = (displayName, email, method) => {
    const user = { displayName, email };
    fetch("https://tranquil-hollows-86813.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    isLoading,
    errors,
    createUserAccount,
    signInWithGoogle,
    logout,
    loginUser,
  };
};
export default useFirebase;

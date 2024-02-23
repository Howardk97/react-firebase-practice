import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const registerUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
    return auth.signOut();
};
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => {
    return auth.signOut();
}
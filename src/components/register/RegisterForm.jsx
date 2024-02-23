import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { registerUser } from "../../firebase/auth";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterForm = () => {
    const [showPass, setShowPass] = useState("password");
    const [showConfirmPass, setShowConfirmPass] = useState("password");
    const [passColor, setPassColor] = useState("emerald-500");
    const [confirmPassColor, setConfirmPassColor] = useState("emerald-500")
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { userLoggedIn } = useAuth();

    const handlePasswordEye = (event) => {
        event.preventDefault();

        if(showPass === "password") {
            setShowPass("text");
            setPassColor("emerald-500")
        };

        if(showPass === "text") {
            setShowPass("password");
            setPassColor("gray-200")
        };
    }

    const handleConfirmPasswordEye = (event) => {
        event.preventDefault();

        if(showConfirmPass === "password") {
            setShowConfirmPass("text");
            setConfirmPassColor("emerald-500")
        };

        if(showConfirmPass === "text") {
            setShowConfirmPass("password");
            setConfirmPassColor("gray-200")
        };
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        if(pass !== confirmPass) {
            setErrorMsg("Passwords do not match. Refresh and try again!")
        }

        if(!isRegistering) {
            setIsRegistering(true);
            await registerUser(email, pass).catch((err) => {
                if(err.code === "auth/email-already-in-use") {
                    setErrorMsg("Email already in use. Try loggin in!")
                } else {
                    setErrorMsg("Oops! Something went wrong. Refresh and try again later.")
                }
            })
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={"/dashboard"} replace={true}/>)}
            <div className='flex flex-col bg-orange-300 rounded-lg py-4 px-10'>
            <h1 className="text-3xl">Sign up Today</h1>
            <form className='flex flex-col py-5' onSubmit={handleSubmitForm}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your email..."
                        className="border-2 my-3 p-1 text-xl w-96"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex">
                    <input 
                        type={showPass} 
                        placeholder="Enter your password..."
                        className="border-2 my-3 p-1 text-xl w-96"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <div 
                        className={`flex justify-center items-center m-3 bg-${passColor} text-white rounded-xl p-2`}
                        onClick={handlePasswordEye}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>
                <div className="flex">
                    <input 
                        type={showConfirmPass}
                        placeholder="Confirm your password..."
                        className="border-2 my-3 p-1 text-xl w-96"
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <div 
                        className={`flex justify-center items-center m-3 bg-${confirmPassColor} text-white rounded-xl p-2 focus:bg-gray-200`}
                        onClick={handleConfirmPasswordEye}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>
                <button className="border-2 border-emerald-500 mt-5 p-2 bg-emerald-500 rounded-lg text-white font-bold text-xl">Sign Up</button>
            </form>
            <div className="flex justify-center items-center">
                <p className="text-xl">Already have an account? <a href="/login" className="underline text-blue-500 active:text-blue-200">Login!</a></p>
            </div>
            <div>
                <p className="text-red-500 font-bold text-xl">{errorMsg}</p>
            </div>
        </div>
    </>
    )
}

export default RegisterForm;
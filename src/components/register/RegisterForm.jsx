import React, { useState } from "react";
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/authContext";
import { registerUser } from "../../firebase/auth";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [showPass, setShowPass] = useState("password");
    const [showConfirmPass, setShowConfirmPass] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);

    const handlePasswordEye = (event) => {
        event.preventDefault();

        if(showPass === "password") setShowPass("text");
        if(showPass === "text") setShowPass("password");
    }

    const handleConfirmPasswordEye = (event) => {
        event.preventDefault();

        if(showConfirmPass === "password") setShowConfirmPass("text");
        if(showConfirmPass === "text") setShowConfirmPass("password");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            setErrorMsg("Passwords do not match!")
            return;
        }

        if(!isRegistering) {
            setIsRegistering(true)
            await registerUser(email, password)
        }
    }

    return (
        <>
            <div className='flex flex-col bg-orange-300 rounded-lg py-4 px-10'>
            <h1>Sign up Today</h1>
            <form className='flex flex-col py-5' onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your email..."
                        className="border-2 my-3 p-1 text-lg w-96"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex">
                    <input 
                        type={showPass} 
                        placeholder="Enter your password..."
                        className="border-2 my-3 p-1 text-lg w-96"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div 
                        className="flex justify-center items-center m-3 bg-emerald-500 text-white rounded-xl p-2"
                        onClick={handlePasswordEye}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>
                <div className="flex">
                    <input 
                        type={showConfirmPass}
                        placeholder="Confirm your password..."
                        className="border-2 my-3 p-1 text-lg w-96"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div 
                        className="flex justify-center items-center m-3 bg-emerald-500 text-white rounded-xl p-2"
                        onClick={handleConfirmPasswordEye}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>
                <button className="border-2 border-emerald-500 my-5 p-2 bg-emerald-500 rounded-lg text-white font-bold text-xl">Login</button>
                <div className="flex justify-center">
                    <p className="text-red-500 font-bold text-xl">{errorMsg}</p>
                </div>
            </form>
        </div>
    </>
    )
}

export default RegisterForm;
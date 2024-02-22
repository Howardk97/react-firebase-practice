import React, { useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterForm = () => {
    const [showPass, setShowPass] = useState("password");
    const [showConfirmPass, setShowConfirmPass] = useState("password");

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

    return (
        <>
            <div className='flex flex-col bg-orange-300 rounded-lg py-4 px-10'>
            <h1>Sign up Today</h1>
            <form className='flex flex-col py-5'>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your email..."
                        className="border-2 my-3 p-1 text-lg w-96"
                    />
                </div>
                <div className="flex">
                    <input 
                        type={showPass} 
                        placeholder="Enter your password..."
                        className="border-2 my-3 p-1 text-lg w-96"
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
                    />
                    <div 
                        className="flex justify-center items-center m-3 bg-emerald-500 text-white rounded-xl p-2"
                        onClick={handleConfirmPasswordEye}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </div>
                <button className="border-2 border-emerald-500 mt-5 p-2 bg-emerald-500 rounded-lg text-white font-bold text-xl">Sign Up</button>
            </form>
            <div className="flex justify-center items-center">
                <p>Already have an account? <a href="/login">Login!</a></p>
            </div>
        </div>
    </>
    )
}

export default RegisterForm;
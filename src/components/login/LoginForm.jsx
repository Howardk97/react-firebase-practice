import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom'
import { signInUser } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";

const LoginForm = () => {
    const { userLoggedIn } = useAuth();

    const [showPass, setShowPass] = useState("password");
    const [passColor, setPassColor] = useState("emerald-500")
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");


    const onSubmit = async (e) => {
        e.preventDefault();

        if(!isSigningIn) {
            setIsSigningIn(true);
            await signInUser(email, pass);
        }
    }

    const handlePasswordEye = (e) => {
        e.preventDefault();

        if(showPass === "password") {
            setShowPass("text");
            setPassColor("emerald-500")
        }
        if(showPass === "text") {
            setShowPass("password");
            setPassColor("gray-200")
        }
    }

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/dashboard'} replace={true}/>)}
            <div className='flex flex-col bg-orange-300 rounded-lg py-4 px-10'>
                <h1 className="text-3xl">Login to your Account</h1>
                <form className='flex flex-col py-5' onSubmit={onSubmit}>
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
                    <button className="border-2 border-emerald-500 mt-5 p-2 bg-emerald-500 rounded-lg text-white font-bold text-xl">Login</button>
                </form>
                <div className="flex justify-center items-center">
                    <p className="text-xl">Need to register? <a href="/register" className="underline text-blue-500 active:text-blue-200">Signup!</a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
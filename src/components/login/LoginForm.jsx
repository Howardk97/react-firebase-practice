import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const LoginForm = () => {
    const [showPass, setShowPass] = useState("password");

    const handlePasswordEye = (e) => {
        e.preventDefault();

        if(showPass === "password") setShowPass("text")
        if(showPass === "text") setShowPass("password")
    }

    return (
        <div className='flex flex-col bg-orange-300 rounded-lg py-4 px-10'>
            <h1>Login to your Account</h1>
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
                <button className="border-2 border-emerald-500 mt-5 p-2 bg-emerald-500 rounded-lg text-white font-bold text-xl">Login</button>
            </form>
            <div className="flex justify-center items-center">
                <p>Need to register? <a href="/register">Signup!</a></p>
            </div>
        </div>
    )
}

export default LoginForm;
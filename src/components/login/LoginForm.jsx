const LoginForm = () => {
    return (
        <div className='flex flex-col w-96 bg-orange-300 rounded-lg py-4 px-10'>
            <h1>Login to your Account</h1>
            <form className='flex flex-col py-5'>
                <input 
                    type="text" 
                    placeholder="Enter your email..."
                    className="border-2 my-3 p-1 text-lg"
                />
                <input 
                    type="password" 
                    placeholder="Enter your password..."
                    className="border-2 my-3 p-1 text-lg"
                />
                <button className="border-2 border-emerald-500 my-5 p-2 bg-emerald-500 rounded-lg text-white font-bold text-xl">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
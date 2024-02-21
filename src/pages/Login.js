import LoginForm from "../components/login/LoginForm";

function Login () {
    return (
        <div>
            <h1>Login</h1>
            <div className="flex justify-center items-center h-screen">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;
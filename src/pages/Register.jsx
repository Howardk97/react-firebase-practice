import RegisterForm from "../components/register/RegisterForm";
import { useAuth } from "../contexts/authContext";

function Register () {
    const {userLoggedIn} = useAuth();
    return (
        <div>
            <h1>Register</h1>
            <div className="flex justify-center items-center h-screen">
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register;
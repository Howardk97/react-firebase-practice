import { useAuth } from "../contexts/authContext";
import { signOutUser } from "../firebase/auth";
import { Navigate, useNavigate} from "react-router-dom";

function Dashboard () {
    // const { currentUser } = useAuth();
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutUser().then(() => { navigate('/login')}).catch((err) => console.log(err))
    }
    return (
        <div>
            {!userLoggedIn && (<Navigate to={'/login'} replace={true} />)}
            <div className="flex flex-col justify-center items-center bg-red-500 h-screen text-white">
                <h1>Dashboard</h1>
                {/* <p>Welcome {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in! </p> */}
                <button 
                    className="bg-emerald-500 rounded-xl p-2 text-xl font-bold"
                    onClick={handleSignOut}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Dashboard;
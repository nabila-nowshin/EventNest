import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/authContext";
import toast from "react-hot-toast";


const Login = () => {
    const {signInUser,setUser,signInWithGoogle}=useContext(AuthContext);
    //for redirect to original after login
    const location=useLocation();
    const navigate = useNavigate();


    //for redirect to original after login
    const from = location.state?.from?.pathname || "/";

    //email,pass
    const handleSignIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        signInUser(email,password)
        .then(res=>{
            const result=res.user;
            toast.success('Logged in successfully! 👋')
            setUser(result)
            navigate(from, { replace: true });
        }
        )
        .catch((error) => {
                toast.error(`Oops... ${error.message}`);
                });
        
    }

    //google
     const handleGoogleLogin = () => {
        signInWithGoogle().then((user) => {
        if (user) {
            navigate(from, { replace: true });
        }
        });
    };


    return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#c6f5ec] via-[#fce8f0] to-[#d2f3ff] p-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
                <h2 className="text-3xl font-extrabold text-center text-gray-800">Login to EventNest</h2>

                <form 
                onSubmit={handleSignIn}
                className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-700 font-semibold">Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                    />
                </div>

                <div>
                    <label className="block mb-1 text-gray-700 font-semibold">Password</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success w-full text-white font-semibold"
                >
                    Login
                </button>

                <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="btn btn-outline btn-info w-full font-semibold"
                >
                    Continue with Google 🌐
                </button>
                </form>

                <p className="text-center text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 font-medium hover:underline">
                    Register here
                </Link>
                </p>
            </div>
    </div>
    );
};

export default Login;
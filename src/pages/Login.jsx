import { Link } from "react-router";


const Login = () => {
    return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#c6f5ec] via-[#fce8f0] to-[#d2f3ff] p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Login to EventNest</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Password</label>
            <input
              type="password"
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
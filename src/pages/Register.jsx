import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../provider/authContext';
import Swal from 'sweetalert2';
import { auth } from '../provider/authProvider';

const Register = () => {
    const navigate = useNavigate();

    const {createUser,setUser,signInWithGoogle,updateUserProfile}=useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;
        const password = e.target.password.value;

        // Password validation
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const minLength = password.length >= 6;

        if (!uppercase || !lowercase || !minLength) {
            let errorMessage = "<strong class=`text-red-300`>Password must:</strong><ul style='text-align:left'>";
            if (!uppercase) errorMessage += "<li class=`text-center`>Include at least one <b>UPPERCASE</b> letter</li>";
            if (!lowercase) errorMessage += "<li class=`text-center`>Include at least one <b>lowercase</b> letter</li>";
            if (!minLength) errorMessage += "<li class=`text-center`>Be at least <b>6 characters</b> long</li>";
            errorMessage += "</ul>";

            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                html: `<div class="swal-error-list">${errorMessage}</div>`
                });
            return;
        }

        
        createUser(email, password)
        .then((userCredential) => {
            // Update user profile with name and photo
            updateUserProfile({
            displayName: name,
            photoURL: url,
            }
            )
            .then(() => auth.currentUser.reload())
            .then(() => {
              setUser({...auth.currentUser});
                // Show success message
                Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'Redirecting to Home...',
                timer: 2000,
                showConfirmButton: false,
                });

                // Redirect to login after delay
                setTimeout(() => {
                navigate('/');
                }, 2000);
            })
            .catch((error) => {
                // Failed to update profile
                Swal.fire({
                icon: 'error',
                title: 'Profile Update Failed',
                text: error.message,
                });
            });
        })
        .catch((error) => {
            // Account creation failed
            Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: error.message,
            });
        });
    }
     
     const handleGoogleLogin = () => {
        signInWithGoogle().then((user) => {
        if (user) {
            navigate('/'); // Safe and legal place to navigate
        }
        });
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffe0e9] via-[#d7f9f1] to-[#f0faff] p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Register for EventNest</h2>

        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name='name'
              placeholder="Your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Photo URL</label>
            <input
              type="url"
              name='url'
              placeholder="Link to your photo"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Create a strong password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-full text-white font-semibold"
          >
            Register
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
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;
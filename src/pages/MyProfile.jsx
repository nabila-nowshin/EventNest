import React, { useContext } from 'react';
import { AuthContext } from '../provider/authContext';
import { auth } from '../provider/authProvider';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const {user,updateUserProfile,setUser}=useContext(AuthContext);
    //console.log(user.displayName);

    const handleUpdateProfile=(e)=>{
        e.preventDefault();
        const updatedName=e.target.updatedName.value;
        const updatedURL=e.target.updatedURL.value;
        // console.log(updatedName,updatedURL);
        updateUserProfile({
            displayName: updatedName,
             photoURL: updatedURL
        })
        .then(() => auth.currentUser.reload())
        .then(() => {
        setUser(auth.currentUser);
        toast.success('Profile updated successfully! 🎉');
        })
        .catch((error) => {
        toast.error(`Profile update failed: ${error.message}`);
        });
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffe0e9] via-[#d7f9f1] to-[#f0faff] p-4'>
      <div className="max-w-md w-full p-8 bg-[#2f002d] text-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#38bdf8]">My Profile</h2>

        <div className="flex flex-col items-center mb-8">
          <img
            src={user?.photoURL|| "https://i.ibb.co/LxH0s1n/default-avatar.png"}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-[#38bdf8] shadow-lg"
          />
          <p className="text-xl font-semibold mt-4">{user.displayName}</p>
          <p className="text-sm text-gray-300">{user.email}</p>
        </div>

        <form
        onSubmit={handleUpdateProfile}
         className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-300">Update Name</label>
            <input
              type="text"
              name='updatedName'
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              placeholder="Enter new name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Update Photo URL</label>
            <input
              type="URL"
              name='updatedURL'
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              placeholder="Enter new photo URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#38bdf8] text-[#0f172a] font-bold py-2 rounded-md hover:bg-[#0ea5e9] transition-colors duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;

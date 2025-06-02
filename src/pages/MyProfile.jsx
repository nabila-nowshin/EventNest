import React from 'react';

const MyProfile = () => {
    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

            <div className="flex flex-col items-center mb-6">
                <img
                src="https://i.ibb.co/LxH0s1n/default-avatar.png"
                alt="User"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                />
                <p className="text-lg font-semibold mt-4">User Name</p>
                <p className="text-sm text-gray-500">user@email.com</p>
            </div>

            <form className="space-y-4">
                <div>
                <label className="block mb-1 font-medium">Update Name</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter new name"
                />
                </div>

                <div>
                <label className="block mb-1 font-medium">Update Photo URL</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter new photo URL"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                Save Changes
                </button>
            </form>
            </div>
    );
};

export default MyProfile;
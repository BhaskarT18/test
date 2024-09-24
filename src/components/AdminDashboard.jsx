import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 p-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Admin Dashboard
        </h1>
        <p className="text-center text-gray-700">
          Welcome, Admin! Here you can manage the application.
        </p>
       
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

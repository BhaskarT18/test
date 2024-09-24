import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
      navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Home!
        </h2>
        <p className="text-center text-gray-600">
          You have successfully logged in. Enjoy your stay!
        </p>
        <div className="flex justify-center">
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

export default Home;

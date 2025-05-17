import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts/UserContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:3000/api/users/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Only if you're using cookies
        }
      );

      // Clear localStorage and context
      localStorage.removeItem("token");
      setUser(null);

      // Navigate to login or home page
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

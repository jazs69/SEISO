import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function VerifyWaste() {
  const { user } = useUser();
  const [wasteId, setWasteId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setWasteId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:3000/api/waste/verify-waste", wasteId, {
        withCredentials: true,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Verification failed");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Hello {user.firstname}! please insert verification code.
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="text"
            name="wasteId"
            placeholder="wasteId"
            value={wasteId}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyWaste;

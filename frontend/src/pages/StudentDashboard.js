import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({ type: "OutPass", reason: "" });

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token
      if (!token) {
        alert("You are not authorized. Please log in.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/requests",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }, // Attach token to request
        }
      );

      alert("Request Submitted!");
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || "Server error"}`);
    }
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <select onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
        <option value="OutPass">OutPass</option>
        <option value="IDCard">ID Card</option>
        <option value="Event">Event Registration</option>
        <option value="MessToken">Mess Token</option>
      </select>
      <input type="text" placeholder="Reason" onChange={(e) => setFormData({ ...formData, reason: e.target.value })} />
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  );
};

export default StudentDashboard;

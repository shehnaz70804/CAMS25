import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/register", formData);
      alert("User registered successfully! Please log in.");
      navigate("/");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
        <option value="student">Student</option>
        <option value="mentor">Mentor</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;

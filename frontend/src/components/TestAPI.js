import React, { useState } from "react";
import axios from "axios";

const TestAPI = () => {
  const [response, setResponse] = useState(null);

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
        role: "student",
      });
      setResponse(res.data);
    } catch (error) {
      setResponse(error.response?.data || "Server error");
    }
  };

  return (
    <div>
      <h2>Test API</h2>
      <button onClick={handleRegister}>Register User</button>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default TestAPI;

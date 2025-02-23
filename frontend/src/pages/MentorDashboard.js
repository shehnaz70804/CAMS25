import { useEffect, useState } from "react";
import { fetchRequests, approveRequest } from "../utils/api";

const MentorDashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests().then((res) => setRequests(res.data));
  }, []);

  const handleApprove = async (id) => {
    await approveRequest(id, localStorage.getItem("token"));
    setRequests(requests.filter((req) => req._id !== id));
  };

  return (
    <div>
      <h2>Mentor Dashboard</h2>
      {requests.map((req) => (
        <div key={req._id}>
          <p>{req.type} - {req.reason}</p>
          <button onClick={() => handleApprove(req._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
};

export default MentorDashboard;

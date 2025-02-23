import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/student" element={<ProtectedRoute role="student" Component={StudentDashboard} />} />
          <Route path="/mentor" element={<ProtectedRoute role="mentor" Component={MentorDashboard} />} />
          <Route path="/admin" element={<ProtectedRoute role="admin" Component={AdminDashboard} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

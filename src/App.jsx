import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import ProtectedRoute from "./protectedRoute.jsx";
import { AuthProvider } from "./AuthContext";
import Dashboard from "./Dashboard"; // path must match exactly


export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello</h1>
      <p>You are logged in!</p>
      <button className="logout-btn" onClick={handleLogout}>Logout</button> 

    </div>

  );
}

export default Dashboard;

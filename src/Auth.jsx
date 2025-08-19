import { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import "./Auth.css";
import PasswordInput from "./PasswordInput"; 


export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/dashboard"); // redirect after signup
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard"); // redirect after login
      }
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password. Please try again.");
      } else if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in instead.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">
          {mode === "login" ? "Login" : "Sign Up"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <p className="switch-mode">
        {mode === "login"
          ? "Don’t have an account?"
          : "Already have an account?"}{" "}
        <span onClick={() => setMode(mode === "login" ? "signup" : "login")}>
          {mode === "login" ? "Sign up" : "Login"}
        </span>
      </p>
    </div>
  );
}

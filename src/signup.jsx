import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import Logo from "./Logo.png"; // Update import path

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1; // Length
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength += 1; // Both cases
    if (/\d/.test(password)) strength += 1; // At least one number
    if (/[!@#$%^&*]/.test(password)) strength += 1; // Special character
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    // After successful signup, navigate to the profile page
    navigate("/profile");
  };

  return (
    <div className="signup-page">
      <img src={Logo} alt="Logo" className="logo" />
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Username" required />
        <input type="date" placeholder="Date of Birth" required />

        <select required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-binary</option>
          <option value="preferNotToSay">Prefer Not to Say</option>
        </select>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className="password-strength">
          <div
            className="strength-bar"
            style={{ width: `${passwordStrength * 25}%`, backgroundColor: getStrengthColor(passwordStrength) }}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const getStrengthColor = (strength) => {
  switch (strength) {
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "yellow";
    case 4:
      return "green";
    default:
      return "transparent";
  }
};

export default SignUp;
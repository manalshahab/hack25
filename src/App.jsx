import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OpeningPage from './opening'; // Ensure this path is correct
import SignUp from './signup'; // Ensure this path is correct
import Profile from './Profile'; // Ensure this path is correct
import ProfileDisplay from './ProfileDisplay'; // Ensure this path is correct
import ProfileLayout from './ProfileLayout';
import './opening.css'; // Ensure this path is correct
import './signup.css'; // Ensure this path is correct
import './Profile.css'; // Ensure this path is correct
import './ProfileDisplay.css'; // Ensure this path is correct
import './ProfileLayout.css'

function App() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileSubmit = (profileData) => {
    const fullProfile = {
      name: 'Kash',
      username: 'revelaufey',
      profilePicture: 'https://via.placeholder.com/150', // Default profile picture
      ...profileData,
    };
    setProfile(fullProfile);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Router>
      <Routes>
        {/* Opening Page */}
        <Route path="/" element={<OpeningPage />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Profile Pages */}
        <Route
          path="/profile"
          element={
            profile && !isEditing ? (
              <ProfileDisplay profile={profile} onEdit={handleEdit} />
            ) : (
              <Profile onSubmit={handleProfileSubmit} />
            )
          }
        />

        {/* Redirect to Opening Page if route not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
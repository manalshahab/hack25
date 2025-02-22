// import React from "react";

// const ProfilePage = () => {
//   return (
//     <div className="container flex items-center p-6 justify-start">
//       <div className="w-1/3 flex justify-start">
//         <img src="/profileK.jpg" alt="Profile" className="profile-img" />
//       </div>
//       <div className="w-2/3 ml-6 text-left">
//         <h2 className="text-2xl font-bold text-[#EFB036]">[Your Name]</h2>
//         <p className="text-gray-300">[Your Title]</p>
//         <p className="mt-2 text-sm text-gray-200">[Your short bio goes here...]</p>
//         <button className="custom-button mt-4">View More</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useState } from 'react';
import './Profile.css';

const Profile = ({ onSubmit }) => {
  const [major, setMajor] = useState('');
  const [courses, setCourses] = useState('');
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [profilePicture, setProfilePicture] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = { major, education, courses, interests, skills, profilePicture };
    onSubmit(profileData); // Pass profile data to App.js
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result); // Set profile picture as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
    <h1>Student Profile</h1>
    <form onSubmit={handleSubmit}>
      {/* Profile Picture Upload */}
      <div className="form-group">
        <label>Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {profilePicture && (
          <div className="profile-picture-preview">
            <img src={profilePicture} alt="Profile Preview" />
          </div>
        )}
      </div>

      {/* Major */}
      <div className="form-group">
        <label>Major:</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="Enter your major"
        />
      </div>

        {/* Education */}
        <div className="form-group">
          <label>Education:</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter your school/university"
          />
        </div>

        {/* Courses Taken */}
        <div className="form-group">
          <label>Courses Taken:</label>
          <textarea
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            placeholder="List courses you've taken"
          />
        </div>

        {/* Interests */}
        <div className="form-group">
          <label>Interests:</label>
          <textarea
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Share your interests"
          />
        </div>

        {/* Skills */}
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="List your skills"
          />
        </div>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
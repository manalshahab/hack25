import React from 'react';
import './ProfileDisplay.css'; // For styling

const ProfileDisplay = ({ profile }) => {
  const { major, education, courses, interests, skills } = profile;

  return (
    <div className="profile-display-page">
      <div className="profile-header">
        <h1>{major}</h1>
        <p className="education">{education}</p>
      </div>

      <div className="profile-details">
        <div className="detail-section">
          <h2>Courses Taken</h2>
          <p>{courses}</p>
        </div>

        <div className="detail-section">
          <h2>Interests</h2>
          <p>{interests}</p>
        </div>

        <div className="detail-section">
          <h2>Skills</h2>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;
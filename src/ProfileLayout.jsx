import React, { useState } from 'react';
import './ProfileLayout.css'; // For styling

const ProfileLayout = ({ profile, onEdit }) => {
  const { name, username, major, education, courses, interests, skills, profilePicture } = profile;
  const [isFollowing, setIsFollowing] = useState(false); // State for follow/unfollow
  const handleEditClick = () => {
    onEdit();
  };

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing); // Toggle follow/unfollow
  };

  return (
    <div className="profile-layout">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-picture">
          <img src={profilePicture || 'https://via.placeholder.com/150'} alt="Profile" />
        </div>
        <h1>{name}</h1>
        <p className="username">@{username}</p>
        <button className="follow-button" onClick={handleFollowClick}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
        <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
      </div>

      {/* Main Content Section */}
      <div className="profile-content">
        {/* Posts Section */}
        <div className="posts-section">
          <h2>Posts</h2>
          <div className="post">
            <p>This is a sample post.</p>
          </div>
          <div className="post">
            <p>Another post here.</p>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Major</h3>
            <p>{major}</p>
          </div>

          <div className="sidebar-section">
            <h3>Education</h3>
            <p>{education}</p>
          </div>

          <div className="sidebar-section">
            <h3>Courses Taken</h3>
            <p>{courses}</p>
          </div>

          <div className="sidebar-section">
            <h3>Interests</h3>
            <p>{interests}</p>
          </div>

          <div className="sidebar-section">
            <h3>Skills</h3>
            <p>{skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
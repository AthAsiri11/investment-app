import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="account-container">
      <div className="account-content">
        <h2>Account Details</h2>
        <div className="profile-section">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic" />
          ) : (
            <div className="profile-placeholder">Upload a Picture</div>
          )}
          {isEditing && <input type="file" accept="image/*" onChange={handleImageUpload} />}
        </div>
        <div className="info-section">
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" disabled={!isEditing} />
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" disabled={!isEditing} />
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" disabled={!isEditing} />
          <label>Income:</label>
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="Enter Income" disabled={!isEditing} />
        </div>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
      </div>
    </div>
  );
};

export default Account;
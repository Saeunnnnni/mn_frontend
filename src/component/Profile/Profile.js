import React from "react";
import PropTypes from "prop-types";
import "./Profile.css"; // 스타일 파일을 임포트하고 있다고 가정합니다.

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="images/chunsic.png" alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>안녕춘식이</h2>
        <div className="followers">
          <span>팔로워 10</span>
          <span>팔로잉 5</span>
        </div>
        <hr />
        <p className="bio">춘식이 닮은 고양이를 가진 집사</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  profileImage: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;

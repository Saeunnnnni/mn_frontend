import React from "react";
import Header from "../../component/Layout/Header/Header";
import MypageNav from "../../component/MypageNav/MypageNav";
import Profile from "../../component/Profile/Profile";
import ProfileEdit from "../../component/ProfileEdit/ProfileEdit";
import "./Mypage.css"; // 위에서 작성한 CSS 파일을 임포트하고 있다고 가정합니다.

const Mypage = () => {
  return (
    <div>
      <Header />
      <hr />
      <MypageNav />
      <hr />
      <div className="mypage-content container">
        <Profile />
        <ProfileEdit />
      </div>
    </div>
  );
};

export default Mypage;

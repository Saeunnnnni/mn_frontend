import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 이메일, 패스워드 정규식 표현
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const emailCheck = (username) => {
    return emailRegEx.test(username);
  };

  const passwordCheck = (password) => {
    if (password.match(passwordRegEx) === null) {
      setPasswordError("비밀번호 형식을 확인해주세요");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    if (!emailCheck(userEmail)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    if (password.match(passwordRegEx) === null) {
      setPasswordError("비밀번호 형식을 확인해주세요");
      return;
    }

    try {
      // 실제 로그인 요청 처리 (axios를 사용하여 백엔드 API 호출)
      const response = await axios.post("http://localhost:9999/login", {
        userEmail: userEmail,
        userPwd: password,
      });

      if (response.data.success) {
        alert("로그인 성공");
        // 로그인 성공 후 처리할 작업 추가
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
    if (!emailCheck(e.target.value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    passwordCheck(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column" }}>
        <img
          src="images/mnLogo01_login.png"
          alt="mnLogo01"
          style={{ width: "200px", marginBottom: "20px" }}
        />
        <input
          type="text"
          placeholder="사용자명"
          value={userEmail}
          onChange={handleEmailChange}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button onClick={handleLogin}>로그인</button>
        <div style={{ marginTop: "10px" }}>
          <Link to="/emailCertification">비밀번호 재설정</Link>
          <Link to="/Signup">회원가입하기</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

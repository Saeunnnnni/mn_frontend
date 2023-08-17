import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false); // 이메일 중복 확인 결과
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState(""); // 닉네임 오류 메시지
  const [withAnimals, setWithAnimals] = useState([]); // 관심있는 음식 체크박스
  //약관 동의 체크박스
  const [agreed, setAgreed] = useState({
    all: false,
    age: false,
    privacy: false,
    promotion: false,
  });

  // DB로 회원가입 정보 보내기
  const handleLogin = async () => {
    // 실제 로그인 요청 처리 (axios를 사용하여 백엔드 API 호출)
    const response = axios
      .post("member/insert", {
        userEmail: email,
        userPwd: password,
        userNickName: nickname,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("로그인 오류:", error);
      });

    console.log(email);
    console.log(password);
    console.log(nickname);
  };

  /*
  const handleSignup = () => {
    // 비밀번호 확인 일치 여부 확인
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }


    // 회원가입 처리 로직 추가
    console.log("회원가입 정보:", {
      email,
      password,
      confirmPassword,
      nickname,
      withAnimals,
      agreed,
    });
  };

  const handleEmailCheck = () => {
    // 이메일 중복 확인 로직
    // 이 부분은 실제 백엔드 API 호출과 처리 로직이 들어가야 합니다.
    // 예시로 setTimeout을 사용해 비동기 처리를 시뮬레이션합니다.
    setTimeout(() => {
      // 중복 확인 결과에 따라 isEmailValid 값을 변경합니다.
      setIsEmailValid(true); // 중복되지 않은 경우
      // setIsEmailValid(false); // 중복된 경우
    }, 1000); // 1초 대기 후 결과 반환
  };
  */

  const handleWithAnimalChange = (animal) => {
    if (withAnimals.includes(animal)) {
      setWithAnimals(withAnimals.filter((item) => item !== animal));
    } else {
      setWithAnimals([...withAnimals, animal]);
    }
  };

  //닉네임 길이 2~10 제한두는 코드
  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    if (newNickname.length >= 2 && newNickname.length <= 10) {
      setNicknameError("");
    } else if (newNickname.length === 1) {
      setNicknameError("닉네임이 너무 짧습니다.");
    } else if (newNickname.length >= 11) {
      setNicknameError("닉네임이 너무 깁니다.");
    }
  };
  /*
  //전체동의를 눌렀을 때 밑 체크박스가 다 선택되게 하는 코드
  const handleAgreeAllChange = () => {
    const newAgreedAll = !agreed.all;
    setAgreed({
      all: newAgreedAll,
      age: newAgreedAll,
      privacy: newAgreedAll,
      promotion: newAgreedAll,
    });
  };
  //각자 체크 박스를 선택할 수 있는 코드
  const handleAgreeSingleChange = (target) => {
    setAgreed((prevAgreed) => ({
      ...prevAgreed,
      [target]: !prevAgreed[target],
    }));
  };
  */

  return (
    <div>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        회원가입
      </h1>
      <hr />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>이메일</label>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*
        <button onClick={handleEmailCheck}>이메일 중복확인</button>
        {isEmailValid ? (
          <span style={{ color: "green" }}>사용 가능한 이메일입니다.</span>
        ) : (
          <span style={{ color: "red" }}>중복된 이메일입니다.</span>
        )}
        */}
        <label>비밀번호</label>
        <span>영문,숫자를 포함한 8자이상의 비밀번호를 입력해주세요</span>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/*
        <label>비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        */}
        <label>닉네임</label>
        <input
          type="text"
          placeholder="별명(2 - 10자)"
          value={nickname}
          onChange={handleNicknameChange}
        />
        {nicknameError && <span style={{ color: "red" }}>{nicknameError}</span>}
        {/*
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>함께하고 있는 반려동물</span>
          <span>* 중복선택 가능</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={withAnimals.includes("반려견")}
                  onChange={() => handleWithAnimalChange("반려견")}
                />
                반려견
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={withAnimals.includes("반려묘")}
                  onChange={() => handleWithAnimalChange("반려묘")}
                />
                반려묘
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={withAnimals.includes("반려햄")}
                  onChange={() => handleWithAnimalChange("반려햄")}
                />
                반려햄
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={withAnimals.includes("반려조")}
                  onChange={() => handleWithAnimalChange("반려조")}
                />
                반려조
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={withAnimals.includes("기타")}
                  onChange={() => handleWithAnimalChange("기타")}
                />
                기타
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={withAnimals.includes("없음")}
                  onChange={() => handleWithAnimalChange("없음")}
                />
                없음
              </label>
            </div>
          </div>
        </div>
        <span>
          <strong>약관동의</strong>
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "20px",
          }}
        >
          <label>
            <input
              type="checkbox"
              checked={agreed.all}
              onChange={handleAgreeAllChange}
            />
            전체동의
          </label>
          <label>
            <input
              type="checkbox"
              checked={agreed.age}
              onChange={() => handleAgreeSingleChange("age")}
            />
            만 14세 이상입니다. (필수)
          </label>
          <label>
            <input
              type="checkbox"
              checked={agreed.privacy}
              onChange={() => handleAgreeSingleChange("privacy")}
            />
            개인정보수집 및 이용동의 (필수)
          </label>
          <label>
            <input
              type="checkbox"
              checked={agreed.promotion}
              onChange={() => handleAgreeSingleChange("promotion")}
            />
            이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신 (선택)
          </label>
        </div>
        */}
        <button onClick={handleLogin}>회원가입하기</button>
      </form>
    </div>
  );
};
export default Signup;

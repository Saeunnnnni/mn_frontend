import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Mypage from "./pages/Mypage/Mypage";
import ResetPwd from "./pages/ResetPwd/ResetPwd";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/resetPwd" element={<ResetPwd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

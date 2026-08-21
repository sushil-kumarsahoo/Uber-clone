import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtectedWrapper from "./pages/userProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectorWrapper from "./pages/CaptainProtectorWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding/>} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectorWrapper>
              <CaptainHome />
            </CaptainProtectorWrapper>
          }
        />
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectorWrapper>
              <CaptainLogout/>
            </CaptainProtectorWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

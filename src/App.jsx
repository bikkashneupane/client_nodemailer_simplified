import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Register } from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { VerifyAccount } from "./components/VerifyAccount";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

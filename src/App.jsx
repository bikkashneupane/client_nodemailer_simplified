import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Register } from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { VerifyAccount } from "./components/VerifyAccount";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

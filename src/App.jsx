import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ReportIssue from "./pages/reportIssue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/login" element={<login />} />
        <Route path="/register" element={<register />} />
        <Route path="/dashboard" element={<dashboard />} />
        <Route path="/report" element={<reportIssue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
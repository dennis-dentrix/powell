import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Applayout from "./ui/Applayout";
import Signup from "./auth/Signup";
import Reports from "./pages/Reports";
// import HomeDashboard from "./features/HomeDashboard";
import HomeDashboard from "./pages/HomeDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="login" />} />
        <Route element={<Applayout />}>
          <Route path="/home" element={<HomeDashboard />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

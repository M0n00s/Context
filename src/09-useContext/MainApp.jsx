import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./componentContext/AboutPage";
import { HomePage } from "./componentContext/HomePage";
import { LoginPage } from "./componentContext/LoginPage";
import { Navbar } from "./componentContext/Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </UserProvider>
  );
};

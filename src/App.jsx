import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/login/LoginPage";
import { useState } from "react";
import Teachers from "./pages/login/teachers/Teachers";
import Students from "./pages/login/students/Students";
import TeachersSingle from "./pages/login/Single/TeachersSingle";
import StudentsSingle from "./pages/login/StudentsSingle/StudentsSingle";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") || false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route element={isAuth ? <Layout /> : <Navigate to="/" />}>
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/:id" element={<TeachersSingle />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<StudentsSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Quizzes from "./pages/Quizzes";
import Learn from "./pages/Learn";
import LeaderBoard from "./pages/LeaderBoard";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Layout from "./components/shared/Layout";
import ForgetPassword from "./pages/auth/ForgetPassword";
// i18n config for translation
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    fallbackLng: "ar",
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "navigator",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookies"],
    },

    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },
  });

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Quizzes from "./pages/Quizzes";
import Learn from "./pages/Learn";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

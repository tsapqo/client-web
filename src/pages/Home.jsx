import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-500">{t("home.title")}</h1>
      <p>{t("home.description")}</p>
      <Link to="/quizzes">
        <button className="bg-blue-500 text-white p-2 rounded-md">
          {t("home.quizzes")}
        </button>
      </Link>
      <Link to="/learn">
        <button className="bg-green-500 text-white p-2 rounded-md">
          {t("home.learn")}
        </button>
      </Link>
    </div>
  );
};

export default Home;

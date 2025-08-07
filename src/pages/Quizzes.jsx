import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Alert from "../components/shared/Alert";

const user = false;

const quizItems = [
  "quran",
  "hadith",
  "sahaba",
  "history",
  "fiqh",
  "ramadan",
  "prophets",
  "salah",
];

const getQuizIcon = (quizType) => {
  switch (quizType) {
    case "quran":
      return "📖";
    case "hadith":
      return "📚";
    case "sahaba":
      return "👥";
    case "history":
      return "🏛️";
    case "fiqh":
      return "💡";
    case "ramadan":
      return "🌙";
    case "prophets":
      return "👲🏻";
    case "salah":
      return "🕌";
    default:
      return "❓";
  }
};

const Quizzes = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {!user && (
        <Alert
          title={t("quizzes.alert.title")}
          description={t("quizzes.alert.description")}
          onAction={() => navigate("/login")}
          actionText={t("quizzes.alert.action")}
          closeText={t("quizzes.alert.close")}
        />
      )}
      <div className="">
        <h1 className="text-3xl font-bold pb-8 text-center">
          {t("quizzes.items.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quizItems.map((item) => (
            <Link
              to={`/quizzes/${item}`}
              key={item}
              className="bg-white rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 overflow-hidden"
            >
              <div className="bg-black p-6 text-white text-center">
                <div className="text-4xl mb-2">{getQuizIcon(item)}</div>
                <h3 className="text-xl font-semibold">
                  {t(`quizzes.items.${item}.title`)}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {t(`quizzes.items.${item}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quizzes;

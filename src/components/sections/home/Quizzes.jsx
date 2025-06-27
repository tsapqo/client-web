import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle, FaStar, FaUsers, FaTrophy } from "react-icons/fa";

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
    default:
      return "❓";
  }
};
const QuizzesSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isArabic = i18n.language === "ar";

  const quizItems = ["quran", "hadith", "sahaba", "history"];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("homeQuizzes.title")}
          </h2>
          <p className="text-lg max-w-3xl text-white mx-auto">
            {t("homeQuizzes.description")}
          </p>
        </div>

        {/* Quiz Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quizItems.map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header with Icon */}
              <div className="bg-black p-6 text-white text-center">
                <div className="text-4xl mb-2">{getQuizIcon(item)}</div>
                <h3 className="text-xl font-semibold">
                  {t(`homeQuizzes.items.${item}.title`)}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {t(`homeQuizzes.items.${item}.description`)}
                </p>

                {/* Quiz Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 gap-2 flex items-center">
                      <FaQuestionCircle className="w-4 h-4 mr-1" />
                      {t("homeQuizzes.items.quran.questions").split(" ")[0] ===
                        "٢٠" ||
                      t("homeQuizzes.items.quran.questions").split(" ")[0] ===
                        "20"
                        ? t(`homeQuizzes.items.${item}.questions`)
                        : t(`homeQuizzes.items.${item}.questions`)}
                    </span>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => navigate("/quizzes")}
                  className="w-full bg-black text-white font-medium py-3 px-4 rounded-lg text-sm transition-all duration-200 group-hover:shadow-lg"
                >
                  {t("homeQuizzes.viewAll")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex gap-2 items-center mb-4">
              <div className="w-10 h-10 gap-2 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <FaStar className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {isArabic ? "اكسب النقاط" : "Earn Points"}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {isArabic
                ? "اكسب نقاطًا لكل إجابة صحيحة وارتق في قائمة المتصدرين"
                : "Earn points for every correct answer and climb the leaderboard"}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex gap-2 items-center mb-4">
              <div className="w-10 h-10 gap-2 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <FaUsers className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {isArabic ? "تنافس مع الأصدقاء" : "Compete with Friends"}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {isArabic
                ? "تحدى أصدقاءك وانظر من يحصل على أعلى النقاط"
                : "Challenge your friends and see who gets the highest score"}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex gap-2 items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <FaTrophy className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {isArabic ? "احصل على الشهادات" : "Get Certificates"}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {isArabic
                ? "احصل على شهادات إتمام للاختبارات التي تنهيها بنجاح"
                : "Earn completion certificates for quizzes you successfully finish"}
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/quizzes")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <FaQuestionCircle className="w-5 h-5 mr-2" />
            {t("homeQuizzes.viewAll")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuizzesSection;

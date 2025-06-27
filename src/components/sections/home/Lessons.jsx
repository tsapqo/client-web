import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LessonsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const lessonItems = ["quran", "hadith", "history", "fiqh"];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("lessons.title")}
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            {t("lessons.description")}
          </p>
        </div>

        {/* Lesson Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {lessonItems.map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* Card Header */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`lessons.items.${item}.title`)}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {t(`lessons.items.${item}.description`)}
                </p>
              </div>
              {/* Card Action */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => navigate("/learn")}
                  className="w-full bg-black text-white font-medium py-2 px-4 rounded-md text-sm"
                >
                  {t("lessons.viewAll")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/learn")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white"
          >
            {t("lessons.viewAll")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;

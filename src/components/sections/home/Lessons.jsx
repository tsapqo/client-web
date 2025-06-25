import { useTranslation } from "react-i18next";

const LessonsSection = () => {
  const { t } = useTranslation();

  const lessonItems = ["quran", "hadith", "history", "fiqh"];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
      case "مبتدئ":
        return "bg-green-100 text-green-800";
      case "Intermediate":
      case "متوسط":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
      case "متقدم":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("lessons.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("lessons.description")}
          </p>
        </div>

        {/* Lesson Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {lessonItems.map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              {/* Card Header */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`lessons.items.${item}.title`)}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {t(`lessons.items.${item}.description`)}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">
                      {t(`lessons.items.${item}.duration`)}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                      t(`lessons.items.${item}.level`)
                    )}`}
                  >
                    {t(`lessons.items.${item}.level`)}
                  </span>
                </div>
              </div>

              {/* Card Action */}
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                  {t("lessons.viewAll")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            {t("lessons.viewAll")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;

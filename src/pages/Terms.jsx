import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("terms.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {t("terms.welcome")}
            </p>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 ${isArabic ? "text-right" : "text-left"}`}
            dir={isArabic ? "rtl" : "ltr"}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                {t("terms.intro")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border-r-4 border-blue-500">
                <p className="text-gray-800 leading-relaxed text-sm md:text-lg">
                  {t("terms.terms.platform")}
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-r-4 border-green-500">
                <p className="text-gray-800 leading-relaxed text-sm md:text-lg">
                  {t("terms.terms.respectful")}
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-r-4 border-purple-500">
                <p className="text-gray-800 leading-relaxed text-sm md:text-lg">
                  {t("terms.terms.privacy")}
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-r-4 border-yellow-500">
                <p className="text-gray-800 leading-relaxed text-sm md:text-lg">
                  {t("terms.terms.content")}
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-r-4 border-orange-500">
                <p className="text-gray-800 leading-relaxed text-sm md:text-lg">
                  {t("terms.terms.updates")}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4 text-sm md:text-lg">
                {t("terms.contact.text")}
              </p>
              <a
                href="mailto:support@tsapqo.com"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-lg transition-colors"
              >
                {t("terms.contact.email")}
              </a>
            </div>

            <div className="text-center py-8">
              <p className="text-xl md:text-2xl font-bold text-gray-900">
                {t("terms.thanks")}
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-black text-white md:font-semibold rounded-lg"
            >
              {t("terms.backHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

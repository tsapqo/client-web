import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const developers = [
  {
    name: "Hussain Mohamad",
    roleKey: "Full-stack Engineer",
    image: "/imgs/mazin.png",
    github: "https://github.com/Mazin-emad",
    linkedin: "https://linkedin.com/in/mazin0emd",
  },
  {
    name: "Mazin Emad",
    roleKey: "Frontend Engineer",
    image: "/imgs/mazin.png",
    github: "https://github.com/Mazin-emad",
    linkedin: "https://linkedin.com/in/mazin0emd",
  },
  {
    name: "Ismail Mohamad",
    roleKey: "Backend Engineer",
    image: "/imgs/mazin.png",
    github: "https://github.com/Mazin-emad",
    linkedin: "https://linkedin.com/in/mazin0emd",
  },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t("about.hero.title")} <span className="text-blue-600">Tsapqo</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t("about.hero.subtitle")}
        </p>
      </div>

      {/* What is Tsapqo Section */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("about.whatIs.title")}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t("about.whatIs.description1")}</p>
              <p>{t("about.whatIs.description2")}</p>
              <p>{t("about.whatIs.description3")}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t("about.purpose.title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✦</span>
                <span>{t("about.purpose.items.item1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✦</span>
                <span>{t("about.purpose.items.item2")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✦</span>
                <span>{t("about.purpose.items.item3")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✦</span>
                <span>{t("about.purpose.items.item4")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {t("about.features.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("about.features.quizzes.title")}
            </h3>
            <p className="text-gray-600">
              {t("about.features.quizzes.description")}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("about.features.progress.title")}
            </h3>
            <p className="text-gray-600">
              {t("about.features.progress.description")}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("about.features.community.title")}
            </h3>
            <p className="text-gray-600">
              {t("about.features.community.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {t("about.team.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="rounded-2xl flex flex-col items-center justify-center overflow-hidden "
            >
              <div
                style={{ backgroundImage: `url(${developer.image})` }}
                className="w-32 h-32 bg-white rounded-full bg-cover bg-center"
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">
                  {developer.name}
                </h3>
                <p className="text-blue-600 text-center font-medium mb-3">
                  {developer.roleKey}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 flex items-center justify-center text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 flex items-center justify-center text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t("about.contact.title")}
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t("about.contact.description")}
        </p>
        <a
          href="mailto:contact@tsapqo.com"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {t("about.contact.button")}
        </a>
      </div>
    </div>
  );
};

export default About;

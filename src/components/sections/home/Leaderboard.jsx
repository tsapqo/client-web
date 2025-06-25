import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCheckCircle,
  FaUsers,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

const LeaderboardSection = () => {
  const { t } = useTranslation();

  // Mock data for top 3 users - in real app this would come from API
  const topUsers = [
    {
      rank: 1,
      name: "Ahmed Al-Rashid",
      points: 2847,
      quizzes: 156,
      accuracy: 94,
      avatar: "/imgs/avatar1.jpg",
    },
    {
      rank: 2,
      name: "Fatima Zahra",
      points: 2653,
      quizzes: 142,
      accuracy: 91,
      avatar: "/imgs/avatar2.jpg",
    },
    {
      rank: 3,
      name: "Omar Khalil",
      points: 2418,
      quizzes: 128,
      accuracy: 89,
      avatar: "/imgs/avatar3.jpg",
    },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <FaTrophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <FaMedal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <FaAward className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">{rank}</span>;
    }
  };

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case 3:
        return "bg-gradient-to-r from-amber-500 to-amber-700 text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("leaderboard.title")}
          </h2>
          <p className="text-base md:text-xl text-white max-w-2xl mx-auto">
            {t("leaderboard.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("leaderboard.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("leaderboard.description")}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {t("leaderboard.features.realTime")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaStar className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {t("leaderboard.features.points")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaAward className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {t("leaderboard.features.lessonsQuizzes")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaUsers className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {t("leaderboard.features.community")}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to="/leaderboard"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-xl"
              >
                <FaChartLine className="w-5 h-5 mr-2" />
                {t("leaderboard.cta")}
              </Link>
            </div>
          </div>

          {/* Right Column - Leaderboard Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-black text-white px-6 py-4">
              <h3 className="text-xl font-bold text-white flex gap-2 items-center">
                <FaTrophy className="w-6 h-6 text-yellow-500" />
                {t("leaderboard.leaderboard")}
              </h3>
            </div>

            <div className="p-6">
              {/* Top 3 Users */}
              <div className="space-y-4">
                {topUsers.map((user, index) => (
                  <div
                    key={user.rank}
                    className={`grid grid-cols-5 gap-4 items-center p-4 rounded-xl transition-all duration-200 hover:bg-gray-50 ${
                      index === 0
                        ? "bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200"
                        : ""
                    }`}
                  >
                    {/* Rank */}
                    <div className="flex items-center justify-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${getRankBadge(
                          user.rank
                        )}`}
                      >
                        {getRankIcon(user.rank)}
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="col-span-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-black  rounded-full flex items-center justify-center text-white font-bold">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {t("leaderboard.table.quizzes")}: {user.quizzes}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <div className="text-center">
                      <div className="font-bold text-lg text-gray-900">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t("leaderboard.table.points")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;

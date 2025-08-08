import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { questions } from "../constants";

const QuizAll = () => {
  const { topic } = useParams();
  const { t } = useTranslation();

  const question = questions.filter((question) => question.topic === topic);

  return (
    <section className="lg:min-w-xl min-w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {t(`quizzes.items.${topic}.title`)}
        </h2>
      </div>
      <div className="p-6 border border-black rounded-lg flex flex-col gap-6">
        {question.map((question) => (
          <div key={question.id} className="flex flex-col gap-4">
            <Link className="text-lg font-bold" to={`/quizzes/${topic}`}>
              {question.arabic}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuizAll;

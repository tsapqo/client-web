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
            <h3 className="text-lg font-bold">{question.arabic}</h3>
            <div className="flex flex-col gap-4">
              {question.arabicOptions.map((option) => (
                <div key={option}>{option}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuizAll;

import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { questions } from "../constants";
import { useState } from "react";

const Quiz = () => {
  const { topic } = useParams();
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const qus = questions.filter((question) => question.topic === topic);

  const handleAnswer = (option) => {
    console.log(option);
    if (option === qus[currentQuestion].arabicAnswer) {
      console.log("correct");
      if (currentQuestion === qus.length - 1) {
        console.log("last question");
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      console.log("incorrect");
    }
  };

  return (
    <section className="lg:min-w-2xl w-full space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {t(`quizzes.items.${topic}.title`)}
        </h2>
        <Link to={`/quizzes/${topic}/all`} className="text-xl hover:underline">
          {t("quizzes.viewAll")}
        </Link>
      </div>
      <div className="p-6 border border-black rounded-lg flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">{qus[currentQuestion].arabic}</h3>
          <div className="flex flex-col gap-4">
            {qus[currentQuestion].arabicOptions.map((option) => (
              <button
                key={option}
                className="text-start hover:text-tsapqoGreen hover:underline underline-offset-4 transition-all duration-300"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { WhiteButton, BlackButton } from "../../ui/Buttons";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-14">
      <div className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-center leading-tight">
          {t("home.title")}
        </h1>
        <p className="text-center lg:text-lg">{t("home.description")}</p>
        <div className="flex gap-4 mt-4">
          <Link to="/quizzes">
            <WhiteButton className="sm:text-lg">
              {t("home.quizzes")}
            </WhiteButton>
          </Link>
          <Link to="/learn">
            <BlackButton className="sm:text-lg">{t("home.learn")}</BlackButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

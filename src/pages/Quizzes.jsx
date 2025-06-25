import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Alert from "../components/shared/Alert";

const user = false;

const Quizzes = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {!user && (
        <Alert
          title={t("quizzes.alert.title")}
          description={t("quizzes.alert.description")}
          onAction={() => navigate("/login")}
          actionText={t("quizzes.alert.action")}
          closeText={t("quizzes.alert.close")}
        />
      )}
      <div className="flex flex-col justify-center items-center gap-1.5 h-full">
        <Link to="/quizzes/1">اساله في القران</Link>
        <Link to="/quizzes/2">اساله في السنه</Link>
        <Link to="/quizzes/3">اساله في الصحابه</Link>
      </div>
    </>
  );
};

export default Quizzes;

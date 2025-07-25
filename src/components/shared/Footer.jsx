import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const year = new Date().getFullYear();
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-tsapqoSbg">
      <div className="max-w-7xl text-sm lg:text-base mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 py-4">
        <p className="text-center">Copyright &copy; {year} Tsapqo</p>
        <div className="flex gap-4">
          <Link to="/terms" className="hover:underline">
            {t("footer.terms")}
          </Link>
          <Link to="/privacy" className="hover:underline">
            {t("footer.privacy")}
          </Link>
          <Link to="/about" className="hover:underline">
            {t("footer.about")}
          </Link>
        </div>
      </div>
    </footer>
  );
};



import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BlackButton } from "../ui/Buttons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const links = [
    { name: t("header.home"), href: "/" },
    { name: t("header.quizzes"), href: "/quizzes" },
    { name: t("header.learn"), href: "/learn" },
    { name: t("header.leaderboard"), href: "/leaderboard" },
  ];

  const ChangeLanguage = () => {
    document.documentElement.dir =
      document.documentElement.dir === "rtl" ? "ltr" : "rtl";
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  useEffect(() => {
    setActive(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <header className="w-full bg-tsapqoBg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold flex items-center gap-2">
              <img
                src="/imgs/final-logo-no-bg.png"
                alt="logo"
                className="w-10 h-10"
              />
              {t("header.logo")}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:space-x-2 lg:space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`hover:bg-tsapqoSbg p-2 rounded-md transition-all duration-300 ${
                  active === link.href ? "bg-tsapqoSbg" : ""
                }`}
                onClick={() =>
                  setActive(link.href === active ? null : link.href)
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="text-sm cursor-pointer font-bold"
              onClick={() => ChangeLanguage()}
            >
              {i18n.language === "ar" ? "English" : "عربي"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden cursor-pointer"
            >
              {isOpen ? <IoMdClose size={24} /> : <CiMenuBurger size={24} />}
            </button>
            <BlackButton
              className="hidden md:block"
              onClick={() => navigate("/login")}
            >
              {t("header.login")}
            </BlackButton>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 flex flex-col items-center justify-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`hover:bg-tsapqoSbg p-2 rounded-md transition-all duration-300 ${
                active === link.href ? "bg-tsapqoSbg" : ""
              }`}
              onClick={() => {
                setActive(link.href === active ? null : link.href);
                setIsOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <BlackButton
            onClick={() => {
              navigate("/login");
              setIsOpen(false);
            }}
          >
            {t("header.login")}
          </BlackButton>
        </nav>
      )}
    </header>
  );
};

export default Header;

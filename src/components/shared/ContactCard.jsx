import { useTranslation } from "react-i18next";

const labelClasses = "block text-sm font-medium text-gray-700 text-start ms-2";

const inputClasses =
  "mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-xs md:text-sm";

const ContactCard = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 text-center rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
      <p className="text-white mb-6 max-w-2xl mx-auto">
        {t("contact.description")}
      </p>
      <form className="bg-white rounded-2xl p-8 space-y-4 max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row align-center w-full justify-center gap-2">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="name" className={labelClasses}>
              {t("contact.form.name")}
            </label>
            <input type="text" name="name" id="name" className={inputClasses} />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="email" className={labelClasses}>
              {t("contact.form.email")}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={inputClasses}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className={labelClasses}>
            {t("contact.form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className={inputClasses}
          />
        </div>
        <button
          type="submit"
          className="mx-auto flex justify-center py-2 px-12 border border-transparent rounded-md shadow-sm font-medium text-white bg-black"
        >
          {t("contact.form.submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactCard;

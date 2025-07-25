import React, { useState } from "react";
import './auth.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function ForgetPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forget password logic here
    console.log("Password reset requested for", email);
  };

  return (
    <div className="auth_container">
      <h2 className="auth_title">{t("auth.forgot_password")}</h2>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            className="auth_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="auth_label">{t("auth.email")}</label>
        </div>
        <button type="submit" className="auth_button">{t("auth.resetPassword")}</button>
      </form>
      <div className="auth_links">
        <Link to='/Login'>
        <p className="auth_link">{t("auth.backtologin")}</p>
        </Link>
      </div>
    </div>
  );
};


import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './auth.css';

export default function Login() {
  const { t } = useTranslation();
  const[loginDetails,setloginDetails]=useState({email:"",password:""})
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted", loginDetails.email,loginDetails.password);
  };

  return (
    <div className="auth_container">
      <h2 className="auth_title">{t("auth.login_title")}</h2>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            className="auth_input"
            value={loginDetails.email}
            onChange={(e) => setloginDetails({...loginDetails,email:e.target.value})}
            required
          />
          <label className="auth_label">{t("auth.email")}</label>
        </div>
        <div className="input_container">
          <input
            type="password"
            className="auth_input"
            value={loginDetails.password}
            onChange={(e) =>setloginDetails({...loginDetails,password:e.target.value})}
            required
          />
          <label className="auth_label">{t("auth.password")}</label>
        </div>
        <button type="submit" className="auth_button">{t("auth.login_button")}</button>
      </form>
      <div className="auth_links">
        <Link to="/forget-password">
        <p className="auth_link">{t("auth.forgot_password")}</p>
        </Link>
        <Link to="/signup">
        <p className="auth_link">{t("auth.register_title")}</p>
        </Link>
      </div>
    </div>
  );
};



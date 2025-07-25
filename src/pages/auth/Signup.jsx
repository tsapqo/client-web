import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './auth.css';

const Signup = () => {
  const { t } = useTranslation();
  const [signupinfo,setsignupinfo]=useState({email:"",password:"",confirmPassword:""})
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (signupinfo.password !== signupinfo.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup submitted", signupinfo);
  };

  return (
    <div className="auth_container">
      <h2 className="auth_title">{t("auth.register_title")}</h2>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            className="auth_input"
            value={signupinfo.email}
            onChange={(e) => setsignupinfo({...signupinfo,email:e.target.value})}
            required
          />
          <label className="auth_label">{t("auth.email")}</label>
        </div>
        <div className="input_container">
          <input
            type="password"
            className="auth_input"
            value={signupinfo.password}
            onChange={(e) => setsignupinfo({...signupinfo,password:e.target.value})}
            required
          />
          <label className="auth_label">{t("auth.password")}</label>
        </div>
        <div className="input_container">
          <input
            type="password"
            className="auth_input"
            value={signupinfo.confirmPassword}
            onChange={(e) => setsignupinfo({...signupinfo,confirmPassword:e.target.value})}
            required
          />
          <label className="auth_label">{t("auth.confirmPassword")}</label>
        </div>
        <button type="submit" className="auth_button">{t("auth.register_button")}</button>
      </form>
      <div className="auth_links">
        <Link to="/Login">
        <p className="auth_link">{t("auth.haveaccount")}</p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './auth.css';

export default function ResetPassword ()  {

  const { t } = useTranslation();
  const [resetpass,setresetpass]=useState({otp:"",password:"",confirmPassword:""})
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (resetpass.password !== resetpass.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup submitted", resetpass);
  };

  return (
    <div className="auth_container">
      <h2 className="auth_title">{t("auth.register_title")}</h2>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            className="auth_input"
            value={resetpass.otp}
            onChange={(e) => setresetpass({...resetpass,otp:e.target.value})}
            required
          />
          <label className="auth_label">{t("auth.otp")}</label>
        </div>
        <div className="input_container">
          <input
            type="password"
            className="auth_input"
            value={resetpass.password}
            onChange={(e) => setresetpass({...resetpass,password:e.target.value})}
            disabled={resetpass.otp==1234?false:true}
            style={{background:resetpass.otp==1234?"":"rgba(181,181,181,.8)"}}
            required
          />
          <label className="auth_label">{t("auth.password")}</label>
        </div>
        <div className="input_container">
          <input
            type="password"
            className="auth_input"
            value={resetpass.confirmPassword}
            onChange={(e) => setresetpass({...resetpass,confirmPassword:e.target.value})}
            disabled={resetpass.otp==1234?false:true}
            style={{background:resetpass.otp==1234?"":"rgba(181,181,181,.8)"}}
            required
          />
          <label className="auth_label">{t("auth.confirmPassword")}</label>
        </div>
        <button type="submit" className="auth_button" 
        disabled={resetpass.otp==1234&&resetpass.password!=""&&resetpass.confirmPassword!=""&&resetpass.password==resetpass.confirmPassword?false:true} 
        style={{background:resetpass.otp==1234&&resetpass.password!=""&&resetpass.confirmPassword!=""&&resetpass.password==resetpass.confirmPassword?"":"gray"}} >{t("auth.register_button")}</button>
      </form>
      <div className="auth_links">
        <Link to="/Login">
        <p className="auth_link">{t("auth.haveaccount")}</p>
        </Link>
      </div>
    </div>
  );
};


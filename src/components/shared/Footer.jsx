import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-10 bg-slate-900 text-white">
      <p>Copyright &copy; 2025</p>
      <Link to="/terms">Terms and conditions</Link>
    </div>
  );
};

export default Footer;

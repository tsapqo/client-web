import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="">404</h1>
      <p className="">Page not found</p>
      <button className="" onClick={navigate("/..")}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="text-3xl font-bold text-red-500 flex flex-col justify-center items-center h-full">
      Our Terms and conditions
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <Link to="/" className="text-blue-500">
        Go to Home
      </Link>
    </div>
  );
};

export default Terms;

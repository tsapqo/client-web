import { Link } from "react-router-dom";

const Quizzes = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5 h-full">
      <Link to="/quizzes/1">اساله في القران</Link>
      <Link to="/quizzes/2">اساله في السنه</Link>
      <Link to="/quizzes/3">اساله في الصحابه</Link>
    </div>
  );
};

export default Quizzes;

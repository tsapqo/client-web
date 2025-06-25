export const WhiteButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white p-2 rounded-md cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export const BlackButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-white bg-black rounded-md cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

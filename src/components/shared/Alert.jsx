import { useState } from "react";
import { WhiteButton, BlackButton } from "../ui/Buttons";

const Alert = ({ title, description, onAction, actionText, closeText }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="bg-tsapqoGreen shadow-2xl z-999 px-10 py-5 md:px-15 md:py-8 lg:px-20 lg:py-10 w-[90%] md:mx-0 md:w-auto rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-2xl font-bold text-center">{title}</h1>
        <p className=" md:text-lg text-center">{description}</p>
        <div className="flex gap-4 mt-4">
          <BlackButton onClick={onClose}>{closeText}</BlackButton>
          <WhiteButton onClick={onAction}>{actionText}</WhiteButton>
        </div>
      </div>
      {/* overlay */}
      <div className="absolute z-998 top-0 left-0 w-full h-full bg-black/50" />
    </>
  );
};

export default Alert;

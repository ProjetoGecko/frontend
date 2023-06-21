import React from "react";
import './FloatingButton.css'
import { useNavigate } from "react-router-dom";

const FloatingButton: React.FC = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat")
  };

  return (
    <div >
      <div>
        <button onClick={handleClick} className="floating-button">
          +
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;
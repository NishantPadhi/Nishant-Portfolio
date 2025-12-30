import React from "react";
import imagepath from '/images/chatImage.svg';
import lightImage from '/images/chatImageLight.svg';
import { useTheme } from "../../context/ThemeContext";

export default function ChatButton() {
  const { theme } = useTheme();

  const isDarkTheme = theme === "dark";

  return (
    <div className="fixed bottom-4 right-4">
      <button>
        <img src={isDarkTheme ? lightImage : imagepath} alt="Chat" className="w-16 h-16"/>
      </button>
    </div>
  );
}
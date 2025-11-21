import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const IconWrapper = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-3 rounded-md border flex items-center justify-center
        ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
      `}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
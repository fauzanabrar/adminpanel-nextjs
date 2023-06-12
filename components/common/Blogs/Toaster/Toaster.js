import React, { useState, useEffect } from "react";
import cx from "classnames";

export default function Toaster({ message, status }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  }

  return (
    isVisible && (
      <div
        className={cx(
          `absolute flex top-28 z-50 right-16 text-black py-2 px-4 rounded-lg shadow`,
          {
            "bg-green-300": status === "success",
            "bg-red-300": status === "error",
            "bg-blue-300": status === "info",
          }
        )}
      >
        <span className="mr-2">✔</span>
        <span className="mr-3">{message}</span>
        <button
          className={cx("text-gray-500 hover:text-gray-700")}
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    )
  );
}

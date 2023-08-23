"use client";

import { useState } from "react";

export const DownloadCVButton = () => {
  const [isPending, setIsPending] = useState(false);
  const [isProgressActive, setIsProgressActive] = useState(false);

  const handleButtonClick = () => {
    if (!isPending) {
      setIsPending(true);
      setIsProgressActive(true);

      setTimeout(() => {
        setIsProgressActive(false);
      }, 2300);

      setTimeout(() => {
        setIsPending(false);
      }, 3600);
    }
  };

  return (
    <div
      className="text-[#161616] font-bold gap-2 w-fit bg-blue_color rounded p-2 cursor-pointer shadow-project"
      onClick={handleButtonClick}
    >
      <a className={`w-fit flex items-center btn ${isPending ? "pending" : ""}`}>
        <span className="xl:text-base text-sm">Download CV</span>
        <svg width="20" height="26" viewBox="0 0 20 26">
          <path d="M1.5 16.5L10 24.5L18.5 16.5"></path>
          <path d="M10 1.5V24"></path>
        </svg>
      </a>
      <span className={`progress ${isProgressActive ? "active" : ""}`}></span>
    </div>
  );
};

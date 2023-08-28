"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export const DownloadCVButton = () => {
  const { t, i18n } = useTranslation();
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
      className="text-white_color font-semibold w-fit bg-blue_color rounded p-2 cursor-pointer shadow-project"
      onClick={handleButtonClick}
    >
      <a
        href={
          i18n.language === "en"
            ? "/assets/resumes/Ikaro%20Felix%20-%20Resume.pdf"
            : "/assets/resumes/Ikaro%20Felix%20-%20Curriculo.pdf"
        }
        download
        className={`w-fit flex items-center btn ${isPending ? "pending" : ""}`}
      >
        <span className="xl:text-base text-sm">{t("hero.download")}</span>
        <svg width="20" height="26" viewBox="0 0 20 26">
          <path d="M1.5 16.5L10 24.5L18.5 16.5"></path>
          <path d="M10 1.5V24"></path>
        </svg>
      </a>
      <span className={`progress ${isProgressActive ? "active" : ""}`}></span>
    </div>
  );
};

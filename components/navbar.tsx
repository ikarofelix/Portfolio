"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NavLinks } from "./nav-links.";
import { LanguageSwitcher } from "./language-switcher";

export const NavBar: React.FC = () => {
  const { i18n } = useTranslation();
  const route = useRouter();

  const language = i18n.language;
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleLanguageSwitcher, setToggleLanguageSwitcher] = useState(false);

  const handleToggleDropdown = () => setToggleDropdown((prev) => !prev);
  const handleToggleLanguageSwitcher = () => setToggleLanguageSwitcher((prev) => !prev);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    route.replace(`/${lng}`);
  };

  const toggleDropdownRef = useRef<HTMLDivElement>(null);
  const languageSwitcherRef = useRef<HTMLDivElement>(null);

  // Event handlers for outside clicks and ESC key
  const handleOutsideClickDropdown = (event: MouseEvent) => {
    if (toggleDropdownRef.current && !toggleDropdownRef.current.contains(event.target as Node)) {
      setToggleDropdown(false);
    }
  };
  const handleOutsideClickLanguage = (event: MouseEvent) => {
    if (
      languageSwitcherRef.current &&
      !languageSwitcherRef.current.contains(event.target as Node)
    ) {
      setToggleLanguageSwitcher(false);
    }
  };
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setToggleDropdown(false);
      setToggleLanguageSwitcher(false);
    }
  };

  // Attach event listeners and cleanup on unmount
  useEffect(() => {
    if (toggleDropdown) {
      document.addEventListener("mousedown", handleOutsideClickDropdown);
      document.addEventListener("keydown", handleEscKey);
    } else if (toggleLanguageSwitcher) {
      document.addEventListener("mousedown", handleOutsideClickLanguage);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickDropdown);
      document.removeEventListener("mousedown", handleOutsideClickLanguage);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [toggleDropdown, toggleLanguageSwitcher]);

  return (
    <header className="fixed z-10 font-cabin bg-dark_color shadow-navbar w-full h-fit">
      <div className="app_container mx-auto flex flex-wrap p-3 sm:p-5 flex-row">
        <a className="w-fit flex font-bold items-center sm:mb-0" href="">
          <span className="sm:text-xl text-lg sm:block hidden">Ikaro Felix</span>
        </a>
        <nav className="ml-auto text-base">
          <div className="sm:flex items-center hidden font-sans">
            <NavLinks />
            <div ref={languageSwitcherRef}>
              <LanguageSwitcher
                language={language}
                switcher={toggleLanguageSwitcher}
                handleSwitcher={handleToggleLanguageSwitcher}
                changeLanguage={changeLanguage}
                click={() => {
                  handleToggleLanguageSwitcher();
                  changeLanguage(`${language === "en" ? "pt" : "en"}`);
                }}
              />
            </div>
          </div>

          <div>
            <div
              ref={toggleDropdownRef}
              className="sm:hidden absolute right-0 top-0 bg-dark_color shadow-navbar rounded p-4 w-full"
            >
              <div>
                <a className="w-fit flex font-bold items-center sm:mb-0" href="">
                  <span className="sm:text-xl text-lg">Ikaro Felix</span>
                </a>
                <div
                  className={`absolute right-6 top-3 sm:hidden menu_btn ${
                    toggleDropdown ? "open" : ""
                  }`}
                  onClick={handleToggleDropdown}
                >
                  <div className="menu_btn__burger"></div>
                </div>
              </div>

              <div className={` font-bold ${toggleDropdown ? "block" : "hidden"}`}>
                <div className="flex flex-wrap flex-col gap-3" onClick={handleToggleDropdown}>
                  <NavLinks />
                  <LanguageSwitcher
                    language={language}
                    switcher={toggleLanguageSwitcher}
                    handleSwitcher={handleToggleLanguageSwitcher}
                    changeLanguage={changeLanguage}
                    click={() => {
                      handleToggleLanguageSwitcher();
                      changeLanguage(`${language === "en" ? "pt" : "en"}`);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

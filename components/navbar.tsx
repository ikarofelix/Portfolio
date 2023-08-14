"use client";

import { useState } from "react";

export const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggleDropdown = () => setToggleDropdown((prev) => !prev);

  return (
    <header className="font-cabin bg-dark_color shadow-navbar w-full h-fit">
      <div className="w-full mx-auto flex flex-wrap p-5 flex-row container">
        <a
          className="hover:text-blue_color w-fit flex font-bold items-center sm:mb-0"
          href=""
          onClick={() => toggleDropdown && handleToggleDropdown()}
        >
          <span className="navbar_title">Ikaro Felix</span>
        </a>
        <nav className="w-fit ml-auto flex items-center text-base justify-center">
          <div className="sm:block hidden font-bold">
            <a className="mr-7 hover:text-blue_color" href="#home">
              Home
            </a>
            <a className="mr-7 hover:text-blue_color" href="#about">
              About
            </a>
            <a className="mr-7 hover:text-blue_color" href="#projects">
              Projects
            </a>
            <a className="hover:text-blue_color" href="#contact">
              Contact
            </a>
          </div>
          <div
            className={`sm:hidden menu-btn ${toggleDropdown ? "open" : ""}`}
            onClick={handleToggleDropdown}
          >
            <div className="menu-btn__burger"></div>
          </div>

          {toggleDropdown && (
            <div>
              <div className="sm:hidden absolute top-16 right-0 bg-dark_color shadow-navbar rounded-md p-4 w-full">
                <div className="flex flex-wrap flex-col items-center justify-center font-bold">
                  <a className="hover:text-blue_color" href="#home" onClick={handleToggleDropdown}>
                    Home
                  </a>
                  <a
                    className="mt-3 hover:text-blue_color"
                    href="#about"
                    onClick={handleToggleDropdown}
                  >
                    About
                  </a>
                  <a
                    className="mt-3 hover:text-blue_color"
                    href="#projects"
                    onClick={handleToggleDropdown}
                  >
                    Projects
                  </a>
                  <a
                    className="mt-3 hover:text-blue_color"
                    href="#contact"
                    onClick={handleToggleDropdown}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

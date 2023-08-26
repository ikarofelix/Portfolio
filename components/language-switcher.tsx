interface LanguageSwitcherProps {
  language: string;
  click: () => void;
  switcher: boolean;
  changeLanguage: (language: string) => void;
  handleSwitcher: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  click,
  switcher,
  changeLanguage,
  handleSwitcher,
}) => {
  return (
    <>
      <div className="sm:flex hidden flex-row-reverse w-16">
        <div className="relative flex cursor-pointer" onClick={handleSwitcher}>
          <img
            src={`/assets/icons/languages/${language === "en" ? "usa-flag" : "brazil-flag"}.svg`}
            className={`transition-transform duration-300 ${
              language === "en" ? "rotate-100" : "scale-105"
            }`}
            alt={language === "en" ? "English icon" : "Portuguese icon"}
            width={32}
            height={32}
          />
          <img
            src="/assets/icons/languages/arrow-down-icon.svg"
            className={`transition-transform duration-300 ${
              switcher ? "-rotate-180" : " pointer-events-none"
            }`}
            alt="Arrow icon"
            width={32}
            height={32}
          />
        </div>
        <div
          className={`cursor-pointer p-3 mt-[3.2rem] flex items-center gap-2 bg-dark_color shadow-navbar absolute rounded-bl rounded-br transition-opacity duration-300 ${
            switcher ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          }`}
          onClick={() => {
            click();
            changeLanguage(`${language === "en" ? "pt" : "en"}`);
          }}
        >
          <img
            src={`/assets/icons/languages/${language === "en" ? "brazil-flag" : "usa-flag"}.svg`}
            alt={language === "en" ? "Portuguese icon" : "English icon"}
            width={32}
            height={32}
          />
          <span>{language === "en" ? "Português" : "English"}</span>
        </div>
      </div>
      <div className="sm:hidden w-full gap-5 flex justify-center">
        <div
          onClick={() => {
            handleSwitcher();
            changeLanguage("pt");
          }}
          className="cursor-pointer flex flex-col items-center"
          role="button"
          aria-label="Switch to Portuguese"
        >
          <img
            src="/assets/icons/languages/brazil-flag.svg"
            alt="Portuguese icon"
            width={32}
            height={32}
          />
          <span className="sr-only">Português</span>
        </div>
        <div
          onClick={() => {
            handleSwitcher();
            changeLanguage("en");
          }}
          className="cursor-pointer flex flex-col items-center"
          role="button"
          aria-label="Switch to English"
        >
          <img
            src="/assets/icons/languages/usa-flag.svg"
            alt="English icon"
            width={32}
            height={32}
          />
          <span className="sr-only">English</span>
        </div>
      </div>
    </>
  );
};

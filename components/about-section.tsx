import { useTranslation } from "react-i18next";

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-20 pb-20 w-full bg-lighter_color font-cabin">
      <div className="app_container m-auto h-full flex lg:flex-row flex-col">
        <div className="lg:w-[100%] flex flex-col gap-10">
          <span className="relative w-fit">
            <span className="section_title">{t("about.title")}</span>
          </span>
          <h3 className="font-bold md:text-2xl text-xl">{t("about.subtitle")}</h3>
          <span className="text_small font-roboto text-justify">
            <p>{t("about.description.one")}</p>
            <br />
            <p>{t("about.description.two")}</p>
          </span>
        </div>
        <div className="w-full lg:flex justify-center hidden">
          <img
            loading="lazy"
            src="/assets/icons/about-me-icon.svg"
            alt="Group of icons in blue color"
          />
        </div>
      </div>
    </section>
  );
};

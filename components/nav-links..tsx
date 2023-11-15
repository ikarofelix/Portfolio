import { useTranslation } from "react-i18next";

interface NavLinkProps {
  onClick: () => void;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, label }) => {
  return (
    <a
      className="w-full text-center p-1 mr-7 hover:text-blue_color cursor-pointer"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export const NavLinks: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavLink label={t("navbar.home")} onClick={() => scrollToSection("home")} />
      <NavLink label={t("navbar.about")} onClick={() => scrollToSection("about")} />
      <NavLink label={t("navbar.projects")} onClick={() => scrollToSection("projects")} />
      <NavLink label={t("navbar.experience")} onClick={() => scrollToSection("experience")} />
      <NavLink label={t("navbar.education")} onClick={() => scrollToSection("education")} />
      <NavLink label={t("navbar.certificates")} onClick={() => scrollToSection("certificates")} />
      <NavLink label={t("navbar.contact")} onClick={() => scrollToSection("contact")} />
    </>
  );
};

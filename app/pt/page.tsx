"use client";

import { NavBar } from "@components/navbar";
import { HeroSection } from "@components/hero-section";
import { AboutSection } from "@components/about-section";
import { ProjectsSection } from "@components/projects-section";
import { ContactSection } from "@components/contact-section";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

const PortfolioPage = () => {
  i18n.changeLanguage("pt");

  return (
    <I18nextProvider i18n={i18n}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="w-full p-5 bg-footer_background_color m-auto text-base text-center">
        © 2023 Ikaro Felix
      </footer>
    </I18nextProvider>
  );
};

export default PortfolioPage;

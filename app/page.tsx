import { HeroSection } from "@components/hero-section";
import { AboutSection } from "@components/about-section";
import { ProjectsSection } from "@components/projects-section";
import { ContactSection } from "@components/contact-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="w-full p-5 bg-footer_background_color m-auto text-lg text-center">
        © 2023 Ikaro Felix
      </footer>
    </div>
  );
};

export default Home;

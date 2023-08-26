import { useTranslation } from "react-i18next";
import { ProjectCard } from "./project-card";

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="pt-20 pb-20 app_container m-auto">
      <span className="relative w-fit">
        <span className="section_title before:-mb-1.5">{t("projects.title")}</span>
      </span>
      <div className="sm:p-10 pt-10 pb-10 flex flex-col items-center gap-10">
        <ProjectCard
          imgClass="alzheimer_care"
          imgSrc="/assets/images/alzheimer-care.png"
          title="Alzheimer Care"
          description={t("projects.alzheimer_care")}
          stacks={["TypeScript", "NodeJS", "React", "Firebase", "MySQL", "GraphQL"]}
          githubLink="https://github.com/ikarofelix/alzheimer-care"
          liveLink="https://alzheimer-care.netlify.app/"
        />
        <ProjectCard
          imgClass="panificadora"
          title="Panificadora Silva Rocha"
          description={t("projects.panificadora")}
          stacks={["JavaScript", "React", "ReactRouter", "StyledComponents"]}
          githubLink="https://github.com/ikarofelix/panificadora-silva-rocha"
          liveLink="https://panificadora-project.netlify.app/"
        />
        <ProjectCard
          imgClass="clothing_e_commerce"
          imgSrc="/assets/images/clothing-e-commerce.png"
          title="Clothing E-Commerce"
          description={t("projects.clothing_e_commerce")}
          stacks={[
            "JavaScript",
            "TypeScript",
            "React",
            "ReactRouter",
            "Firebase",
            "Redux",
            "StyledComponents",
          ]}
          githubLink="https://github.com/ikarofelix/clothing-e-commerce"
          liveLink="https://clothing-e-commerce-react-app.netlify.app/"
        />
      </div>
    </section>
  );
};

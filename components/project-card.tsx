import { StackIcons, Stacks } from "./stack-icons";
import { SocialIcon } from "./social-icons";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  imgSrc?: string;
  imgClass?: string;
  title: string;
  description: string;
  stacks: Stacks[];
  githubLink: string;
  liveLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  imgClass,
  title,
  description,
  stacks,
  githubLink,
  liveLink,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`project_container lg:flex-row${imgClass === "panificadora" ? "-reverse" : ""}`}
    >
      <div className={`project_img_container ${imgClass}`} aria-label={`${title} Project`}>
        {imgSrc && (
          <img loading="lazy" src={imgSrc} alt={`${title} Project`} className="w-full h-full" />
        )}
      </div>
      <div className="project_info">
        <h1 className="project_title">{title}</h1>
        <p className="text_small text-center">{description}</p>
        <StackIcons stacks={stacks} project />
        <div className="flex gap-10">
          <SocialIcon icon="GitHub" link={githubLink} span={t("projects.code")} />
          <SocialIcon icon="Live" link={liveLink} span={t("projects.live")} />
        </div>
      </div>
    </div>
  );
};

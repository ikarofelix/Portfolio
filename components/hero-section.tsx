import { DownloadCVButton } from "./download-cv-button";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { StackIcons } from "./stack-icons";
import { SocialIcon } from "./social-icons";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const pathName = usePathname();
  const isEnglish = () => (pathName === "/en" ? true : false);
  const heroDescription = t("hero.description", {
    name: '<strong class="text-white_color">Ikaro Felix</strong>',
  });

  return (
    <section
      id="home"
      className="pt-20 pb-20 min-h-screen p-5 app_container m-auto flex flex-col lg:flex-row-reverse justify-center gap-10 items-center"
    >
      <div className="hero_image_vector max-w-xl">
        <picture>
          <img
            width={800}
            height={800}
            src="/assets/images/hero-image-colored.png"
            loading="eager"
            alt={
              isEnglish()
                ? "Ikaro Felix in a black shirt sitting with his arms crossed in front of him while looking directly at the camera"
                : "Ikaro Felix utilizando uma blusa preta enquanto está sentado com seus braços cruzados e olhando diretamente para a câmera"
            }
          />
        </picture>
      </div>

      <div className="lg:self-center self-start flex flex-col gap-10 max-w-3xl">
        <div className="flex flex-col gap-3">
          <h1 className="2xl:text-5xl md:text-4xl text-2xl font-bold font-cabin">
            {!isEnglish() && "Desenvolvedor "}
            <span className="relative">
              {isEnglish() && ""}

              <span
                className={`before:absolute before:content-[''] before:left-0 before:bg-blue_color before:h-1 ${
                  isEnglish() ? "before:w-[95%]" : "before:w-[100%]"
                } before:bottom-0 before:rounded`}
              >
                Full Stack{" "}
              </span>
            </span>
            {isEnglish() && "Developer"}
          </h1>
          <p
            className="2xl:text-lg md:text-base text-sm font-roboto text-justify"
            dangerouslySetInnerHTML={{ __html: heroDescription }}
          />
        </div>
        <div>
          <h2 className="md:text-2xl text-xl font-bold font-cabin">{t("hero.subtitle")}</h2>
          <StackIcons
            stacks={["Python", "JavaScript", "TypeScript", "NodeJS", "React", "NextJS", "SQL", "Docker", "GraphQL"]}
          />
        </div>
        <DownloadCVButton />
      </div>
      <div className="min-w-[32px] flex lg:flex-col flex-wrap justify-center lg:gap-8 gap-4">
        <SocialIcon icon="Gmail" link="mailto:ikaroisdm@gmail.com" />
        <SocialIcon icon="LinkedIn" link="https://linkedin.com/in/ikarofelix" />
        <SocialIcon icon="GitHub" link="https://github.com/ikarofelix" />
        <SocialIcon
          icon="WhatsApp"
          link="https://api.whatsapp.com/send/?phone=%2B5531998056550&text=Oi,%20vim%20pelo%20seu%20Portfolio"
        />
      </div>
    </section>
  );
};

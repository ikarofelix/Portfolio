import { useTranslation } from "react-i18next";
import Image from "next/image";

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="pt-20 pb-20 w-full bg-lighter_color">
        <div className="app_container m-auto">
            <span className="relative w-fit">
                <span className="section_title">{t("experience.title")}</span>
            </span>
            <div className="mt-5 grid lg:grid-cols-2 gap-32">
                <div className="flex flex-col items-center">
                    <Image 
                        width={64} 
                        height={64} 
                        loading="lazy"
                        className="rounded-xl" 
                        src="/assets/images/rw-interactive.jpg"
                        alt="RW Interactive logo image" 
                    />
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold">RW Interactive</h3>
                        <h3 className="2xl:text-2xl md:text-xl text-lg font-medium mt-5"><strong>{t("experience.first.position.title")}</strong></h3>
                        <h3>{t("experience.first.position.date")}</h3>
                        <ul className="list-disc list-inside text-justify flex flex-col gap-3 mt-5">
                            <li dangerouslySetInnerHTML={{ __html: t("experience.first.position.description.topics.topic1") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: t("experience.first.position.description.topics.topic2") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: t("experience.first.position.description.topics.topic3") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: t("experience.first.position.description.topics.topic4") }}></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image 
                        width={64} 
                        height={64} 
                        loading="lazy"
                        className="rounded-xl" 
                        src="/assets/images/codementor.jpg"
                        alt="CodeMentor logo image" 
                    />
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold">CodeMentor</h3>
                        <h3 className="2xl:text-2xl md:text-xl text-lg font-medium mt-5"><strong>{t("experience.second.position.title")}</strong></h3>
                        <h3>{t("experience.second.position.date")}</h3>
                        <ul className="list-disc list-inside text-justify flex flex-col gap-3 mt-5">
                            <li dangerouslySetInnerHTML={{ __html: t("experience.second.position.description.topics.topic1") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: t("experience.second.position.description.topics.topic2") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: t("experience.second.position.description.topics.topic3") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: t("experience.second.position.description.topics.topic4") }}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
import { useTranslation } from "react-i18next";
import Image from "next/image";

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="pt-20 pb-20 w-full">
        <div className="app_container m-auto">
            <span className="relative w-fit">
                <span className="section_title">{t("education.title")}</span>
            </span>
            <div className="mt-5 flex gap-5 flex-wrap justify-center items-center">
                <a href="https://www.una.br/" target="_blank">
                    <Image 
                        width={64} 
                        height={64} 
                        loading="lazy"
                        className="rounded-xl" 
                        src={"/assets/images/una.jpg"} 
                        alt={`${t("education.university")} logo image`} 
                    />
                </a>
                <div>
                    <h3>{t("education.university")}</h3>
                    <h3><strong>{t("education.degree")}</strong></h3>
                    <h3>2023 - 2027</h3>
                </div>
            </div>
        </div>
    </section>
  )
}
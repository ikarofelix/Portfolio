import { useTranslation } from "react-i18next";
import Image from "next/image";

export const Certificates: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="pt-20 pb-20 w-full bg-lighter_color">
        <div className="app_container m-auto">
            <span className="relative w-fit">
                <span className="section_title">{t("certificates.title")}</span>
            </span>
            <div className="flex items-center justify-center gap-20 flex-wrap mt-7">
                <a href="https://www.efset.org/cert/8Y2FJW" 
                    target="_blank" 
                    className="flex flex-col items-center w-[80%] sm:w-[45%] md:w-56"
                >
                    <Image 
                        width={64} 
                        height={64} 
                        loading="lazy"
                        className="rounded-xl" 
                        src="/assets/images/ef-set.jpg"
                        alt="RW Interactive logo image" 
                    />
                    <span className="font-semibold mt-2">English - Proficient/Fluent (C2)</span>
                    <span className="font-extralight">by EF SET</span>
                </a>
                <a href="https://coursera.org/share/a1a75d20c9d1b715a9048046e8f9f732" 
                    target="_blank" 
                    className="flex flex-col items-center w-[80%] sm:w-[45%] md:w-56"
                >
                    <div className="bg-white rounded-xl -p-2">
                        <Image 
                            width={64} 
                            height={64} 
                            loading="lazy"
                            src="/assets/images/meta.png"
                            alt="RW Interactive logo image" 
                        />
                    </div>
                    <span className="font-semibold mt-2">Backend Development</span>
                    <span className="font-extralight">by Meta</span>
                </a>
                <a href="https://www.hackerrank.com/certificates/35d23152da13" 
                    target="_blank" 
                    className="flex flex-col items-center w-[80%] sm:w-[45%] md:w-56"
                >
                    <Image 
                        width={64} 
                        height={64} 
                        loading="lazy"
                        className="rounded-xl" 
                        src="/assets/images/hackerrank.png"
                        alt="RW Interactive logo image" 
                    />
                    <span className="font-semibold mt-2">JavaScript</span>
                    <span className="font-extralight">by HackerRank</span>
                </a>
            </div>
        </div>
    </section>
  )
}
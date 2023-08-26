import { useTranslation } from "react-i18next";
import { SocialIcon } from "./social-icons";

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="pt-10 pb-10 w-full bg-lighter_color">
      <div className="app_container m-auto">
        <span className="relative w-fit">
          <span className="section_title">{t("contact.title")}</span>
        </span>

        <div className="mt-5 w-fit m-auto grid lg:grid-rows-2 sm:grid-rows-3 grid-rows-5 justify gap-10 grid-flow-col">
          <SocialIcon
            icon="Location"
            link="https://www.google.com/maps/place/Minas+Gerais/@-18.5543766,-48.0922185,7z/data=!3m1!4b1!4m6!3m5!1s0xa690a165324289:0x112170c9379de7b3!8m2!3d-17.930178!4d-43.7908453!16zL20vMDFnaDZ6?entry=ttu"
            h1={t("contact.location")}
            span={t("contact.address")}
          />
          <SocialIcon
            icon="WhatsApp"
            link="https://api.whatsapp.com/send/?phone=%2B5531998056550&text=Oi,%20vim%20pelo%20seu%20Portfolio"
            h1="WhatsApp"
            span="+55 (31) 99805-6550"
          />
          <SocialIcon
            icon="LinkedIn"
            link="http://linkedin.com/in/ikarofelix"
            h1="LinkedIn"
            span="/in/ikarofelix"
          />
          <SocialIcon
            icon="GitHub"
            link="http://github.com/ikarofelix"
            h1="GitHub"
            span="/ikarofelix"
          />
          <SocialIcon
            icon="Gmail"
            link="mailto:ikaroisdm@gmail.com"
            h1="Gmail"
            span="ikaroisdm@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

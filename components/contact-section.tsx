import Image from "next/image";

export const ContactSection = () => {
  return (
    <section id="contact" className="pt-10 pb-10 w-full bg-lighter_color">
      <div className="app_container m-auto">
        <span className="relative w-fit">
          <span className="section_title">Contact</span>
        </span>

        <div className="w-fit m-auto grid lg:grid-rows-2 sm:grid-rows-3 grid-rows-6 justify gap-10 grid-flow-col">
          <a
            className="w-fit flex items-center gap-2"
            href="https://www.google.com/maps/place/Minas+Gerais/@-18.5543766,-48.0922185,7z/data=!3m1!4b1!4m6!3m5!1s0xa690a165324289:0x112170c9379de7b3!8m2!3d-17.930178!4d-43.7908453!16zL20vMDFnaDZ6?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/socials/location-icon.svg"
              alt="Location Icon"
              title="Location"
              width={35}
              height={35}
            />

            <div>
              <h1 className="font-bold text-lg">Location</h1>
              <span>Minas Gerais, Brazil</span>
            </div>
          </a>
          <a
            className="w-fit flex items-center gap-2"
            href="https://api.whatsapp.com/send/?phone=%2B5531998056550&text=Oi,%20vim%20pelo%20seu%20Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/socials/whatsapp-icon.svg"
              alt="WhatsApp Icon"
              title="WhatsApp"
              width={35}
              height={35}
            />

            <div>
              <h1 className="font-bold text-lg">WhatsApp</h1>
              <span>+55 (31) 99805-6550</span>
            </div>
          </a>
          <a
            className="w-fit flex items-center gap-2"
            href="http://linkedin.com/in/ikarofelix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/socials/linkedin-icon.svg"
              alt="LinkedIn Icon"
              title="LinkedIn"
              width={35}
              height={35}
            />

            <div>
              <h1 className="font-bold text-lg">LinkedIn</h1>
              <span>/in/ikarofelix</span>
            </div>
          </a>
          <a
            className="w-fit flex items-center gap-2"
            href="http://github.com/ikarofelix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/socials/github-icon.svg"
              alt="GitHub Icon"
              title="GitHub"
              width={35}
              height={35}
            />

            <div>
              <h1 className="font-bold text-lg">GitHub</h1>
              <span>/ikarofelix</span>
            </div>
          </a>
          <a
            className="w-fit flex items-center gap-2"
            href="mailto:ikaroisdm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/socials/gmail-icon.svg"
              alt="Gmail Icon"
              title="Gmail"
              width={35}
              height={35}
            />

            <div>
              <h1 className="font-bold text-lg">Gmail</h1>
              <span className="break-all">ikaroisdm@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

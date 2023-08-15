import Image from "next/image";

const Home = () => {
  return (
    <section className="p-5 app_container m-auto flex flex-col lg:flex-row-reverse justify-center gap-10 items-center">
      <div className="hero_image_vector max-w-xl">
        <Image
          src="/assets/images/hero-image-colored.png"
          alt="Ikaro Felix in a black shirt sitting with his arms crossed in front of him"
          width="768"
          height="1024"
        />
      </div>

      <div className=" flex flex-col gap-10 max-w-3xl">
        <div className="flex flex-col gap-3">
          <h1 className="2xl:text-6xl md:text-4xl text-2xl font-bold font-cabin">
            <span className="relative">
              <span className="before:absolute before:content-[''] before:left-0 before:bg-blue_color before:h-1 before:w-[95%] before:bottom-0 before:rounded">
                Front-End{" "}
              </span>
            </span>
            Developer
          </h1>
          <p className="2xl:text-xl md:text-base text-sm font-roboto text-justify">
            Hi, I'm <span className="text-blue_color">Ikaro Felix</span>. An enthusiast in the art
            of problem-solving and crafting creations from the ground up, situated in the state of
            Minas Gerais in Brazil.
          </p>
        </div>

        <div>
          <h2 className="2xl:text-4xl md:text-2xl text-xl font-bold font-cabin">Stacks</h2>
        </div>
      </div>

      <div className="min-w-[32px] flex lg:flex-col lg:gap-8 gap-4">
        <a href="mailto:ikaroisdm@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/icons/gmail-icon.svg" alt="Gmail Icon" width={35} height={35} />
        </a>
        <a href="https://linkedin.com/in/ikarofelix" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/icons/linkedin-icon.svg" alt="LinkedIn Icon" width={35} height={35} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5531998056550&text=Oi,%20vim%20pelo%20seu%20Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/assets/icons/whatsapp-icon.svg" alt="WhatsApp Icon" width={35} height={35} />
        </a>
        <a href="https://github.com/ikarofelix" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/icons/github-icon.svg" alt="GitHub Icon" width={35} height={35} />
        </a>
      </div>
    </section>
  );
};

export default Home;

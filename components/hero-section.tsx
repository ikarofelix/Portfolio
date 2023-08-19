import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-20 min-h-screen p-5 app_container m-auto flex flex-col lg:flex-row-reverse justify-center gap-10 items-center"
    >
      <div className="hero_image_vector max-w-xl">
        <Image
          src="/assets/images/hero-image-colored.png"
          priority
          alt="Ikaro Felix in a black shirt sitting with his arms crossed in front of him"
          width="768"
          height="1024"
        />
      </div>

      <div className="lg:self-center self-start flex flex-col gap-10 max-w-3xl">
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
          <div className="flex flex-wrap w-fit justify-center -ml-2">
            <img
              className="stack_image"
              src="/assets/icons/stacks/javascript-icon.svg"
              alt="JavaScript icon"
              title="JavaScript"
            />
            <img
              className="stack_image"
              src="/assets/icons/stacks/typescript-icon.svg"
              alt="TypeScript icon"
              title="TypeScript"
            />

            <img
              className="stack_image"
              src="/assets/icons/stacks/node-js-icon.svg"
              alt="Node JS icon"
              title="Node JS"
            />

            <img
              className="stack_image"
              src="/assets/icons/stacks/react-icon.svg"
              alt="React icon"
              title="React"
            />
            <img
              className="stack_image"
              src="/assets/icons/stacks/next-js-icon.svg"
              alt="Next JS icon"
              title="Next JS"
            />
            <img
              className="stack_image"
              src="/assets/icons/stacks/mysql-icon.svg"
              alt="MySQL icon"
              title="MySQL"
            />

            <img
              className="stack_image"
              src="/assets/icons/stacks/graphql-icon.svg"
              alt="GraphQL icon"
              title="GraphQL"
            />
          </div>
        </div>

        {/* Download Button
    <div>
      <a href="#" className="btn">
        <span className="circle"></span>

        <svg width="20" height="26" viewBox="0 0 20 26">
          <path d="M1.5 16.5L10 24.5L18.5 16.5"></path>
          <path d="M10 1.5V24"></path>
        </svg>
        <span className="progress"></span>
      </a>
    </div> */}
      </div>

      <div className="min-w-[32px] flex lg:flex-col flex-wrap justify-center lg:gap-8 gap-4">
        <a href="mailto:ikaroisdm@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/socials/gmail-icon.svg"
            alt="Gmail icon"
            width={35}
            height={35}
          />
        </a>
        <a href="https://linkedin.com/in/ikarofelix" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/socials/linkedin-icon.svg"
            alt="LinkedIn icon"
            width={35}
            height={35}
          />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5531998056550&text=Oi,%20vim%20pelo%20seu%20Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/icons/socials/whatsapp-icon.svg"
            alt="WhatsApp icon"
            width={35}
            height={35}
          />
        </a>
        <a href="https://github.com/ikarofelix" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/socials/github-icon.svg"
            alt="GitHub icon"
            width={35}
            height={35}
          />
        </a>
      </div>
    </section>
  );
};

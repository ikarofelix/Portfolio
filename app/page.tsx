import Image from "next/image";

const Home = () => {
  return (
    <section className="container m-auto flex flex-col justify-center items-center active_border">
      <div className="hero_image_vector">
        <Image
          src="/assets/images/hero-image-colored.png"
          alt="Ikaro Felix in a black shirt sitting with his arms crossed in front of him"
          width="768"
          height="1024"
        />
      </div>

      <div className="flex sm:flex-col gap-4">
        <a href="mailto:ikaroisdm@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/icons/gmail-icon.svg" alt="Gmail Icon" width={32} height={32} />
        </a>
        <a href="https://linkedin.com/in/ikarofelix" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/icons/linkedin-icon.svg" alt="LinkedIn Icon" width={32} height={32} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5531998056550&text=Oi,%20vim%20pelo%20seu%20Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/assets/icons/whatsapp-icon.svg" alt="WhatsApp Icon" width={32} height={32} />
        </a>
        <a href="https://github.com/ikarofelix" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/icons/github-icon.svg" alt="GitHub Icon" width={32} height={32} />
        </a>
      </div>
    </section>
  );
};

export default Home;

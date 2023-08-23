export const AboutSection = () => {
  return (
    <section id="about" className="pt-20 pb-20 w-full bg-lighter_color font-cabin">
      <div className="app_container m-auto h-full flex lg:flex-row flex-col">
        <div className="lg:w-[100%] flex flex-col gap-10">
          <span className="relative w-fit">
            <span className="section_title">About Me</span>
          </span>
          <h3 className="font-bold 2xl:text-3xl md:text-2xl text-xl">
            I code to drive impactful change, infusing passion and creativity into every digital
            creation.
          </h3>
          <span className="text_small font-roboto text-justify">
            <p>
              I'm super into tech and all the amazing stuff it can do. That's why I got into web
              development – it's this awesome combo of being creative, solving problems, and always
              picking up new things. What really gets me excited is making apps that you can
              interact with, and they look really cool too. Like, they can actually make a
              difference in people's lives.
            </p>
            <br />
            <p>
              I'm one of those people who's always curious about how things tick. Right now, I'm
              really getting into how systems are put together, especially things like databases and
              servers. I'm even thinking of getting more into Back-End development down the road.
              I'm always on the lookout for new knowledge – I'm a total learning junkie. Challenges
              keep me fired up, and I love starting from scratch and building stuff up. Oh, and by
              the way, I'm pretty handy with JavaScript, TypeScript, React, Redux, Firebase, MySQL,
              GraphQL, NodeJS and some other stuff.
            </p>
          </span>
        </div>
        <div className="w-full lg:flex justify-center hidden">
          <img
            loading="lazy"
            src="/assets/icons/about-me-icon.svg"
            alt="Group of icons in blue color"
          />
        </div>
      </div>
    </section>
  );
};

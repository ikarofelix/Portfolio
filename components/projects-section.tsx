import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-20 pb-20 app_container m-auto">
      <span className="relative w-fit">
        <span className="section_title before:-mb-1.5">Projects</span>
      </span>
      <div className="sm:p-10 pt-10 pb-10 flex flex-col items-center gap-10">
        <div className="project_container lg:flex-row">
          <div className="project_img_container alzheimer_care">
            <img
              loading="lazy"
              src="/assets/images/alzheimer-care.png"
              alt="Alzheimer Care Project"
              className="w-full h-full"
            />
          </div>
          <div className="project_info">
            <h1 className="project_title">Alzheimer Care</h1>
            <p className="text_small text-center">
              A compassionate personal project aimed at providing a web and mobile solution for
              individuals dealing with Alzheimer's. This initiative focuses on storing health
              information, offering a potential source of support for caregivers and patients alike.
            </p>
            <div className="project_stacks">
              <img
                className="project_stack_image"
                src="/assets/icons/stacks/typescript-icon.svg"
                alt="TypeScript icon"
                title="TypeScript"
              />

              <img
                className="project_stack_image"
                src="/assets/icons/stacks/node-js-icon.svg"
                alt="Node JS icon"
                title="Node JS"
              />

              <img
                className="project_stack_image"
                src="/assets/icons/stacks/react-icon.svg"
                alt="React icon"
                title="React"
              />

              <img
                className="project_stack_image"
                src="/assets/icons/stacks/firebase-icon.svg"
                alt="Firebase icon"
                title="Firebase"
              />

              <img
                className="project_stack_image"
                src="/assets/icons/stacks/mysql-icon.svg"
                alt="MySQL icon"
                title="MySQL"
              />

              <img
                className="project_stack_image"
                src="/assets/icons/stacks/graphql-icon.svg"
                alt="GraphQL icon"
                title="GraphQL"
              />
            </div>
            <div className="flex gap-10">
              <div>
                <a
                  href="https://github.com/ikarofelix/alzheimer-care"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center"
                >
                  <Image
                    loading="lazy"
                    src="/assets/icons/socials/github-icon.svg"
                    alt="GitHub icon"
                    width={35}
                    height={35}
                  />
                  <span className="font-semibold">Code</span>
                </a>
              </div>
              <div>
                <a
                  href="https://alzheimer-care.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center"
                >
                  <Image
                    loading="lazy"
                    src="/assets/icons/live-icon.svg"
                    alt="See website live icon"
                    width={35}
                    height={35}
                  />
                  <span className="font-semibold">Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project_container lg:flex-row-reverse">
          <div className="project_img_container panificadora"></div>
          <div className="project_info">
            <h1 className="project_title">Panificadora Silva Rocha</h1>
            <p className="text_small text-center">
              Tailored for a family bakery, this project merges English code with Brazilian
              Portuguese flair, showcasing history, products, services, and a contact form. Its
              adaptable layout, charming design, and user-friendliness cater to all, including
              slower internet connections.
            </p>
            <div className="project_stacks">
              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/javascript-icon.svg"
                alt="JavaScript icon"
                title="JavaScript"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/react-icon.svg"
                alt="React icon"
                title="React"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/react-router-icon.svg"
                alt="React Router icon"
                title="React Router"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/styled-components-icon.svg"
                alt="Styled Components icon"
                title="Styled Components"
              />
            </div>
            <div className="flex gap-10">
              <div>
                <a
                  href="https://github.com/ikarofelix/panificadora-silva-rocha"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center"
                >
                  <Image
                    loading="lazy"
                    src="/assets/icons/socials/github-icon.svg"
                    alt="GitHub icon"
                    width={35}
                    height={35}
                  />
                  <span className="font-semibold">Code</span>
                </a>
              </div>
              <div>
                <a
                  href="https://panificadora-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center"
                >
                  <Image
                    loading="lazy"
                    src="/assets/icons/live-icon.svg"
                    alt="See website live icon"
                    width={35}
                    height={35}
                  />
                  <span className="font-semibold">Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project_container lg:flex-row">
          <div className="project_img_container clothing_e_commerce">
            <img
              loading="lazy"
              src="/assets/images/clothing-e-commerce.png"
              alt="Clothing E-Commerce Project"
              className="w-full h-full"
            />
          </div>
          <div className="project_info">
            <h1 className="project_title">Clothing E-Commerce</h1>
            <p className="text_small text-center">
              This project is a part of the "Complete React Developer in 2023" course, focusing on
              building online stores. Discover features like product browsing, user accounts, cart
              management, and Stripe payment integration. Perfect for understanding web development,
              payments, login systems and more.
            </p>
            <div className="project_stacks">
              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/javascript-icon.svg"
                alt="JavaScript icon"
                title="JavaScript"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/typescript-icon.svg"
                alt="TypeScript icon"
                title="TypeScript"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/react-icon.svg"
                alt="React icon"
                title="React"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/react-router-icon.svg"
                alt="React Router icon"
                title="React Router"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/firebase-icon.svg"
                alt="Firebase icon"
                title="Firebase"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/redux-icon.svg"
                alt="Redux icon"
                title="Redux"
              />

              <img
                loading="lazy"
                className="project_stack_image"
                src="/assets/icons/stacks/styled-components-icon.svg"
                alt="Styled Components icon"
                title="Styled Components"
              />
            </div>
            <div className="flex gap-10">
              <div>
                <a
                  href="https://github.com/ikarofelix/clothing-e-commerce"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center"
                >
                  <Image
                    loading="lazy"
                    src="/assets/icons/socials/github-icon.svg"
                    alt="GitHub icon"
                    width={35}
                    height={35}
                  />
                  <span className="font-semibold">Code</span>
                </a>
              </div>
              <div>
                <a
                  href="https://clothing-e-commerce-react-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center"
                >
                  <Image
                    loading="lazy"
                    src="/assets/icons/live-icon.svg"
                    alt="See website live icon"
                    width={35}
                    height={35}
                  />
                  <span className="font-semibold">Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

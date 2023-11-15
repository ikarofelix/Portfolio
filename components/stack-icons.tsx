import Image from "next/image";

export type Stacks =
  | "JavaScript"
  | "TypeScript"
  | "NodeJS"
  | "React"
  | "NextJS"
  | "MySQL"
  | "GraphQL"
  | "Firebase"
  | "ReactRouter"
  | "Redux"
  | "StyledComponents"
  | "SQL"
  | "Python"
  | "Csharp"
  | "Docker"
  | "Django"
  | "DjangoRestFramework"
  | "PostgreSQL";

type StackIconsMap = {
  [key: string]: string;
};

const stackIconsMap: StackIconsMap = {
  javascript: "javascript-icon.svg",
  typescript: "typescript-icon.svg",
  nodejs: "node-js-icon.svg",
  react: "react-icon.svg",
  nextjs: "next-js-icon.svg",
  mysql: "mysql-icon.svg",
  graphql: "graphql-icon.svg",
  firebase: "firebase-icon.svg",
  reactrouter: "react-router-icon.svg",
  redux: "redux-icon.svg",
  styledcomponents: "styled-components-icon.svg",
  python: "python-icon.svg",
  sql: "sql-icon.svg",
  csharp: "csharp-icon.svg",
  docker: "docker-icon.svg",
  django: "django-icon.svg",
  djangorestframework: "djangorestframework-icon.svg",
  postgresql: "postgresql-icon.svg",
};

export const StackIcons: React.FC<{ stacks: Stacks[]; project?: boolean }> = ({
  stacks,
  project,
}) => {
  return (
    <div className={`flex flex-wrap w-fit justify-center ${!project && "-ml-2"}`}>
      {stacks.map((stack) => {
        const iconName = stackIconsMap[stack.toLowerCase()];
        return (
          <Image
            key={stack}
            {...(project ? { loading: "lazy" } : { loading: "eager" })}
            className={`${project ? "project_stack_image" : "stack_image"} cursor-pointer`}
            src={`/assets/icons/stacks/${iconName}`}
            alt={`${stack} icon`}
            title={stack}
            width={24}
            height={24}
          />
        );
      })}
    </div>
  );
};

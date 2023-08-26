import Image from "next/image";

type SocialIconProps = {
  icon: "GitHub" | "LinkedIn" | "WhatsApp" | "Gmail" | "Location" | "Live";
  link: string;
  h1?: string;
  span?: string;
  width?: number;
  height?: number;
};

export const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  link,
  h1,
  span,
  width = 35,
  height = 35,
}) => (
  <a
    {...(span && {
      className: "w-fit flex flex-wrap items-center gap-2",
    })}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={`/assets/icons/socials/${icon.toLocaleLowerCase()}-icon.svg`}
      alt={`${icon} icon`}
      width={width}
      height={height}
      {...(span && { loading: "lazy" })}
    />
    {h1 && span && (
      <div>
        <h1 className="font-bold sm:text-lg">{h1}</h1>
        <span className="sm:text-base text-sm break-all">{span}</span>
      </div>
    )}
    {!h1 && span && <span className="font-semibold">{span}</span>}
  </a>
);

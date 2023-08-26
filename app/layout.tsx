"use client";

import "@styles/globals.css";
import i18n from "./i18n";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const pathName = usePathname();
  const currentLanguage = i18n.language;

  const getLang = () => {
    if (currentLanguage === "pt" || pathName === "/pt") {
      return "pt-BR";
    } else {
      return "en";
    }
  };

  useEffect(() => {
    if (pathName === "/en" || pathName === "/pt") {
      i18n.changeLanguage(pathName.slice(1));
    } else {
      const userLang = navigator.language.split("-")[0];
      i18n.changeLanguage(userLang);
      route.push(`/${userLang}`);
    }
  }, []);

  return (
    <html lang={getLang()} className="bg-dark_color text-white_color">
      <title>Ikaro Felix - Portfolio</title>
      <meta
        name="description"
        content={`${
          getLang() === "en"
            ? "Front-End Developer's Portfolio by Ikaro Felix"
            : "Portfólio de Ikaro Felix - Desenvolvedor Front-End"
        }`}
      />
      <body>
        <div className="page_background sm:after:block after:hidden">
          <div className="background_gradient sm:block hidden"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

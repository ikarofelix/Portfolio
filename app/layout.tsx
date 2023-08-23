import "@styles/globals.css";
import { Nav } from "@components/navbar";

export const metadata = {
  title: "Ikaro Felix - Portfolio",
  description: "Front-End Developer Portfolio by Ikaro Felix",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-dark_color text-white_color">
      <body>
        <div className="page_background sm:after:block after:hidden">
          <div className="background_gradient sm:block hidden"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

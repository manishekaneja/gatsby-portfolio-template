/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./global.css";
import "./layout.css";

const Layout: FC<{
  children: React.ReactNode;
  backgroundType: "full" | "start" | "end";
  withFlex?: boolean;
}> = ({ children, backgroundType, withFlex = false }) => {
  return (
    <>
      <Header />
      <main
        className={` m-0 p-0 w-full ${backgroundType} ${
          withFlex ? " flex items-center justify-center " : ""
        } `}
        style={{ minHeight: "calc( 100vh  - 2.5rem - 4rem )" }}
      >
        <div className="max-w-5xl m-auto mt-0">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

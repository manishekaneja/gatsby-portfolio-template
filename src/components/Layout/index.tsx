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
import classes from "./layout.module.scss";

const Layout: FC<{
  children: React.ReactNode;
  backgroundType: "full" | "blocked";
  withFlex?: boolean;
}> = ({ children, backgroundType, withFlex = false }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header withShadow={backgroundType === "full"} />
      <main
        className={`${classes.container} ${
          backgroundType === "full" ? classes.fullBackground : ""
        } ${backgroundType === "blocked" ? classes.partialBackground : ""} ${
          withFlex ? classes.flx : ""
        }`}
      >
        {children}
      </main>
      <Footer withShadow={backgroundType === "full"} />
    </>
  );
};

export default Layout;

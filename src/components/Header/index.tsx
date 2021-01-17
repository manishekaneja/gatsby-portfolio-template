import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { Fragment, useState } from "react";
import classes from "./header.module.scss";

type NavObj = {
  title: string;
  path: string;
};

const navigaionPanel: NavObj[] = [
  {
    title: "About Me",
    path: "/about-me",
  },
  {
    title: "Knowledge",
    path: "/knowledge",
  },
  {
    title: "Experiences",
    path: "/experiences",
  },
  {
    title: "Projects",
    path: "/project-list",
  },
  {
    title: "Contact Me",
    path: "/contact-me",
  },
];

const Header: React.FC<{ withShadow: boolean }> = ({ withShadow }) => {
  const [menuState, setMenuState] = useState(true);
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      placeholderImage: file(relativePath: { eq: "menu-icon.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      closeImage: file(relativePath: { eq: "close-icon.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <div className={classes.headerCover} />
      <header className={`${classes.header} ${withShadow ? classes.shw : ""}`}>
        <div>
          <span className={classes.name}>
            <Link to="/">Manish Aneja</Link> /
          </span>
          <span className={classes.role}>Developer</span>
          {/* <span
          className={classes.hide}
          style={{ display: "inline-flex", flex: 1, backgroundColor: "green" }}
        /> */}
          <span
            onClick={() => setMenuState(ps => !ps)}
            className={`${classes.hide} ${classes.optionButton}`}
          >
            {!menuState ? (
              !data?.closeImage?.childImageSharp?.fixed ? null : (
                <Img fixed={data.closeImage.childImageSharp.fixed} />
              )
            ) : !data?.placeholderImage?.childImageSharp?.fixed ? null : (
              <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            )}
          </span>
        </div>
        <nav
          className={`${classes.navigation} ${
            menuState ? classes.notVisible : ""
          }`}
        >
          {navigaionPanel.map((menuOption: NavObj) => (
            <Link
              key={menuOption.path}
              to={menuOption.path}
              onClick={() => setMenuState(false)}
            >
              <span>{menuOption.title}</span>
            </Link>
          ))}
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;

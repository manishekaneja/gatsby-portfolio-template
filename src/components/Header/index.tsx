import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { Fragment, useState } from "react";

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

const Header: React.FC<{}> = () => {
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
      <div className="h-16" />
      <header className="bg-light h-16 flex items-center justify-center py-0 px-9 fixed top-0 left-0 w-full z-50">
        <div className="pl-16 uppercase text-dark">
          <Link to="/" className="text-2xl">
            <span>Manish Aneja</span>
          </Link>
          <span className="text-2xl font-medium">/</span>
          <span className="m-0 font-black">Developer</span>
          {/* <span
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
          </span> */}
        </div>
        <nav
          className={`flex flex-1 justify-end items-stretch h-full ${
            menuState ? "" : "hidden"
          }`}
        >
          {navigaionPanel.map((menuOption: NavObj) => (
            <Link
              key={menuOption.path}
              to={menuOption.path}
              onClick={() => setMenuState(false)}
              className="flex justify-center items-center cursor-pointer uppercase py-2 px-7 transition-colors ease-linear duration-150 hover:bg-secondary hover:text-light"
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

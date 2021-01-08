import { Link } from "gatsby"
import React, { Fragment, useState } from "react"
import classes from "./header.module.scss"

type NavObj = {
  title: string
  path: string
}

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
]

const Header: React.FC<{ withShadow: boolean }> = ({ withShadow }) => {
  const [menuState, setMenuState] = useState(false)

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
            {menuState ? `=` : "x"}
          </span>
        </div>

        <nav
          className={`${classes.navigation} ${
            menuState ? classes.notVisible : ""
          }`}
        >
          {navigaionPanel.map((menuOption: NavObj) => (
            <Link to={menuOption.path}>
              <span>{menuOption.title}</span>
            </Link>
          ))}
        </nav>
      </header>
    </Fragment>
  )
}
export default Header

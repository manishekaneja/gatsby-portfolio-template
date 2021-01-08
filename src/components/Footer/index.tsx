/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from "react"
import classes from "./footer.module.scss"

const Footer: FC<{ withShadow: boolean }> = ({ withShadow }) => {
  return (
    <>
      <div className={classes.footerCover} />
      <footer className={`${classes.footer} ${withShadow ? classes.shw : ""}`}>
        <div
          style={{
            margin: `auto`,
            maxWidth: 960,
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* <span>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span> */}
        </div>
      </footer>
    </>
  )
}

export default Footer

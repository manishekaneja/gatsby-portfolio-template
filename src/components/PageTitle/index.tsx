import React from "react"
import classes from "./page-title.module.scss"

const PageTitle: React.FC<{ title: string; gutterBottom: boolean }> = ({
  gutterBottom,
  title,
}) => {
  return (
    <div
      className={`${classes.full} ${gutterBottom ? classes.gutterBottom : ""}`}
    >
      <span className={classes.title}>{title}</span>
    </div>
  )
}
export default PageTitle

import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import src from "../../images/gatsby-astronaut.png";
import classes from "./about-me.module.scss";
const AboutMePage = () => (
  <Layout backgroundType="blocked" withFlex>
    <SEO title="Home" />
    <section className={classes.section}>
      <article>
        <img className={classes.img} src={src} />
        <h3 className={classes.name}>
          <span>Manish</span>
          <span>Aneja</span>
        </h3>
        <h4 className={classes.role}>Developer</h4>
      </article>
      <article>
        <h3>Hello there,</h3>
        <p>
          Myself a javascript enthusiast, who does development for fun. Started
          my journey with UI and currently, doing application development.
        </p>
      </article>
    </section>
  </Layout>
);

export default AboutMePage;

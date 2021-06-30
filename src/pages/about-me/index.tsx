import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import classes from "./about-me.module.scss";
const AboutMePage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      placeholderImage: file(relativePath: { eq: "myself.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout backgroundType="start" withFlex>
      <SEO title="Manish Aneja" />
      <section className={classes.section}>
        <article>
          {!data?.placeholderImage?.childImageSharp?.fixed ? null : (
            <Img
              className={classes.img}
              fixed={data.placeholderImage.childImageSharp.fixed}
            />
          )}
          {/* <img className={classes.img} src={image.fixed.src} /> */}
          <h3 className={classes.name}>
            <span>Manish</span>
            <span>Aneja</span>
          </h3>
          <h4 className={classes.role}>Developer</h4>
        </article>
        <article>
          <h3>Hello there,</h3>
          <p>
            Myself a javascript enthusiast, who does development for fun.
            Started my journey with UI and currently, doing application
            development.
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default AboutMePage;

import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/seo";
import src from "../../images/gatsby-astronaut.png";
import classes from "./knowledge.module.scss";

const KnowledgePage = () => (
  <Layout backgroundType="full">
    <SEO title="Home" />
    <section className={classes.top}>
      <PageTitle title="Knowledge" gutterBottom />
      <article className={classes.card}>
        <div>
          <img className={classes.img} src={src} />
        </div>
        <div>
          <p>
            My primary focus has always been building a usable & friendly
            application. And for this purpose, I have selected the MERN stack.
          </p>
          <p>
            My skills are not at all limited to the keywords present on this
            screen and working on expanding them with time. As a full path is
            still left to discover.
          </p>
        </div>
      </article>
    </section>
  </Layout>
);

export default KnowledgePage;

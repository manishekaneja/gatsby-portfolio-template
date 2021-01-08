import React, { FC, Fragment } from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/seo";
import classes from "./experiences.module.scss";
import { Experiences } from "./type";

const ExperiencesPage = () => (
  <Layout backgroundType="full">
    <SEO title="Home" />
    <section>
      <PageTitle title="Experiences" gutterBottom />
      {([
        {
          id: 1,
          companyName: "Tata Consultancy Services",
          postion: "Syestem Engineer",
          startTime: "2019",
          endTime: "Present",
          description: [
            "Got the opportunity to work on multiple projects varying from building a website to developing a mobile application.",
            "These projects not only allowed me to showcase my skills but also gave me a taste of how a real-life team project works.",
          ],
        },
        {
          id: 2,
          companyName: "VOZ",
          postion: "Frontend Developer - Intern",
          startTime: "Nov 2018",
          endTime: "Jan 2019",
          description: [
            "As a frontend developer, my primary activity revolves around adding new features to the application & understanding the user-flow to perform improvements to the same.",
            "It was a really good experience as it allowed me to explore and introduced me to new approaches for development.",
          ],
        },
        {
          id: 3,
          companyName: "Enceladus Internet Pvt. Ltd.",
          postion: "Fullstack Developer - Intern",
          startTime: "May 2018",
          endTime: "July 2018",
          description: [
            "A unique opportunity that introduced me to an eCommerce application flow. Allowed me to study how data flow works and what all attributes need focus in such cases.",
            "Other than learning about eCommerce, implementing a dashboard, automatic invoices, and implementing design-rich webpages were also kept in focus.",
          ],
        },
      ] as Experiences[]).map((node: Experiences) => {
        return <ExperiencesCard key={node.id} experience={node} />;
      })}
    </section>
  </Layout>
);

const ExperiencesCard: FC<{ experience: Experiences }> = ({ experience }) => {
  return (
    <Fragment>
      <article className={classes.card}>
        <div className={classes.timeline}>
          <p>
            {experience.startTime} - {experience.endTime}
          </p>
        </div>
        <div className={classes.position}>
          <p>{experience.postion}</p>
        </div>
        <div className={classes.description}>
          {experience.description.map((desc: string) => (
            <p>{desc}</p>
          ))}
        </div>
        <div className={classes.companyName}>
          <p>{experience.companyName}</p>
        </div>
      </article>
    </Fragment>
  );
};

export default ExperiencesPage;

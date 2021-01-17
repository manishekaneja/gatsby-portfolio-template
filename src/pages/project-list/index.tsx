import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { FC, Fragment } from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/seo";
import classes from "./project-list.module.scss";

const AboutMePage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery1 {
      allFile(filter: { relativePath: { regex: "/^project/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 406) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);
  return (
    <Layout backgroundType="full">
      <SEO title="Home" />
      <section>
        <PageTitle title="Projects" gutterBottom />
        {([
          {
            id: 1,
            name: "Adventure Island",
            oneLiner: "Java Arcade Game",
            description: [
              "A clone of the famous Arcade Game using Java. The Interface has basic controls like moving forward, backward, and jump. It also includes a specific set of rewards for players along with a bunch of enemies.",
            ],
            imgObj: data.allFile.nodes.find((obj: any) =>
              obj.childImageSharp.fluid.originalName.includes("arcade")
            ),
          },
          {
            id: 2,
            name: "Feedback System",
            oneLiner: "MEAN stack",
            description: [
              "A complete feedback system which allows user to get feedback based on his/her connects.The idea of the whole system is to share the feedback anonymously so that the real thought can be shared without any hesitaions.",
            ],
            imgObj: data.allFile.nodes.find((obj: any) =>
              obj.childImageSharp.fluid.originalName.includes("mern")
            ),
          },
          {
            id: 3,
            name: "Service Management Application",
            oneLiner: "React Native",
            description: [
              "An application that efficiently manages and shows the status of the service requests raised by customers, based on the roles of the User. Since it a data-centric application, displaying detailed information and convey the correct message to the user was the main focus.",
            ],
            imgObj: data.allFile.nodes.find((obj: any) =>
              obj.childImageSharp.fluid.originalName.includes("application")
            ),
          },
        ] as Project[]).map((project: Project) => (
          <ProjectCard key={project.id} information={project} />
        ))}
      </section>
    </Layout>
  );
};

const ProjectCard: FC<{ information: Project }> = ({ information }) => (
  <Fragment>
    <article className={classes.card}>
      <div>
        <div className={classes.title}>
          <p>{information.name}</p>
        </div>
        <div className={classes.oneliner}>
          <p>{information.oneLiner}</p>
        </div>
        <div className={classes.description}>
          {information.description.map((desc: string, idx: number) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>
      </div>
      <div>
        {!information.imgObj.childImageSharp?.fluid ? null : (
          <Img
            placeholderClassName={classes.imgPlaceholder}
            style={{ display: "block" }}
            fluid={information.imgObj.childImageSharp?.fluid}
          />
        )}
      </div>
    </article>
  </Fragment>
);
export default AboutMePage;

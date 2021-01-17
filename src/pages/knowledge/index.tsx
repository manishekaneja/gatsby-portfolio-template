import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/seo";
import classes from "./knowledge.module.scss";

const KnowledgePage = () => {
  const data = useStaticQuery(graphql`
    query KnowledgeQuery {
      placeholderImage: file(relativePath: { eq: "react-icon.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      htmlImage: file(relativePath: { eq: "html-icon.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cssImage: file(relativePath: { eq: "css-icon.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nodeImage: file(relativePath: { eq: "node-icon2.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gitImage: file(relativePath: { eq: "git-icon2.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  // const nodeDivRef = useRef(null);

  // const [movement, setMovement] = useState({ x: 0, y: 0 });
  // useLayoutEffect(() => {
  //   const mouseEvent = function ({ clientX, clientY }: globalThis.MouseEvent) {
  //     // setMovement({
  //     console.log(nodeDivRef.current.imageRef.current.);
  //     // nodeDivRef.current += clientX / globalThis.innerWidth;
  //     // y: clientY / globalThis.innerHeight,
  //     // });
  //   };
  //   window.addEventListener("mousemove", mouseEvent);
  //   return function () {
  //     window.removeEventListener("mousemove", mouseEvent);
  //   };
  // }, [nodeDivRef]);
  return (
    <Layout backgroundType="full">
      <SEO title="Home" />
      <div className={classes.container}>
        <section className={classes.top}>
          <PageTitle title="Knowledge" gutterBottom />
          {!data?.htmlImage?.childImageSharp?.fixed ? null : (
            <div className={classes.htmlImgCard}>
              <Img
                className={classes.htmlImg}
                fixed={data.htmlImage.childImageSharp.fixed}
              />
            </div>
          )}
          {!data?.cssImage?.childImageSharp?.fixed ? null : (
            <div className={classes.cssImgCard}>
              <Img
                className={classes.cssImg}
                fixed={data.cssImage.childImageSharp.fixed}
              />
            </div>
          )}
          {!data?.nodeImage?.childImageSharp?.fixed ? null : (
            <div className={classes.nodeImgCard}>
              <Img
                className={classes.nodeImg}
                fixed={data.nodeImage.childImageSharp.fixed}
              />
            </div>
          )}
          {!data?.gitImage?.childImageSharp?.fixed ? null : (
            <div className={classes.gitImgCard}>
              <Img
                className={classes.gitImg}
                fixed={data.gitImage.childImageSharp.fixed}
              />
            </div>
          )}
          <article className={classes.card}>
            {!data?.placeholderImage?.childImageSharp?.fixed ? null : (
              <Img
                className={classes.img}
                fixed={data.placeholderImage.childImageSharp.fixed}
              />
            )}
            <div>
              <p>
                My primary focus has always been building a usable & friendly
                application. And for this purpose, I have selected the MERN
                stack.
              </p>
              <p>
                My skills are not at all limited to the keywords present on this
                screen and working on expanding them with time. As a full path
                is still left to discover.
              </p>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default KnowledgePage;

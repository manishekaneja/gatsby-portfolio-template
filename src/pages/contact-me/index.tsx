import React, { ChangeEvent, useRef, useState } from "react";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/seo";
import classes from "./contact-me.module.scss";

const ContactMePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const valueSetter = useRef(callback => {
    return (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      callback(event.target.value);
    };
  }).current;

  return (
    <Layout backgroundType="blocked">
      <SEO title="Home" />
      <section>
        <PageTitle title="Lets Talk" gutterBottom />
        <article className={classes.card}>
          <Input
            className={`${classes.area1}`}
            label="Name"
            value={name}
            onChangeAction={valueSetter(setName)}
            multiline={false}
            identifier="name"
          />
          <Input
            className={`${classes.area2}`}
            label="Email"
            value={email}
            onChangeAction={valueSetter(setEmail)}
            multiline={false}
            identifier="email"
          />
          <Input
            className={`${classes.area3}`}
            label="Message"
            value={message}
            onChangeAction={valueSetter(setMessage)}
            multiline={true}
            rows={4}
            identifier="message"
          />
          <button className={classes.button}>Send</button>
        </article>
      </section>
    </Layout>
  );
};

export default ContactMePage;

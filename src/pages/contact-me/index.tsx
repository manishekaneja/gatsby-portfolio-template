import axios from "axios";
import React, { useState } from "react";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import SEO from "../../components/seo";
import classes from "./contact-me.module.scss";

const ContactMePage = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const valueSetter = useRef(callback => {
  //   return (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  //     callback(event.target.value);
  //   };
  // }).current;

  const [serverState, setServerState] = useState<{
    submitting?: boolean;
    status?: any;
  }>({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (
    ok: boolean,
    msg: string,
    form: HTMLFormElement
  ) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/04708615-3b58-43f5-bd47-ea3fe1e622b0",
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r: any) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <Layout backgroundType="blocked">
      <SEO title="Home" />
      <section>
        <PageTitle title="Lets Talk" gutterBottom />
        {serverState.status ? (
          <div
            className={classes.card}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {serverState.status.ok ? (
              <h2>Thanks for Contacting</h2>
            ) : (
              <>
                <h2 style={{ color: "red" }}>Error in Messaging Service</h2>
                <h4>
                  Drop me a mail at <em>manishekaneja@gmail.com</em>
                </h4>
              </>
            )}
          </div>
        ) : (
          <form className={classes.card} onSubmit={handleOnSubmit}>
            <Input
              className={`${classes.area1}`}
              label="Name"
              // value={name}
              // onChangeAction={valueSetter(setName)}
              multiline={false}
              identifier="name"
            />
            <Input
              className={`${classes.area2}`}
              label="Email"
              // value={email}
              // onChangeAction={valueSetter(setEmail)}
              multiline={false}
              identifier="email"
            />
            <Input
              className={`${classes.area3}`}
              label="Message"
              // value={message}
              // onChangeAction={valueSetter(setMessage)}
              multiline={true}
              rows={4}
              identifier="message"
            />
            <button
              type="submit"
              disabled={serverState.submitting}
              className={classes.button}
            >
              Send
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default ContactMePage;

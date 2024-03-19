import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

export default function Contact({ refProp }) {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mygbo5d", "template_hlzrxha", form.current, {
        publicKey: "_nOOfmCBV2IQGWkBx",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact" ref={refProp}>
      <div className="contact-section">
        <div className="contactHeading">
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              sx={{
                label: { color: "#d9d9d9" },
                input: { color: "#FFFFFF" },
              }}
              name="user_name"
              id="standard-basic1"
              label="NAME"
              variant="standard"
              className="textField"
              value={name}
              onChange={nameHandler}
            />
            <TextField
              sx={{
                label: { color: "#d9d9d9" },
                input: { color: "#FFFFFF" },
              }}
              name="user_email"
              id="standard-basic2"
              label="EMAIL"
              variant="standard"
              className="textField"
              value={email}
              onChange={emailHandler}
            />{" "}
            <TextField
              sx={{
                label: { color: "#d9d9d9" },
                input: { color: "#FFFFFF" },
              }}
              name="message"
              id="standard-basic3"
              label="MESSAGE"
              variant="standard"
              className="textField"
              value={message}
              onChange={messageHandler}
            />
            <button>Contact me</button>
          </form>
        </div>
        <img src="assets/pattern-rings.svg" />
      </div>
    </div>
  );
}

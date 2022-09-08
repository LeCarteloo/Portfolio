import SectionHeader from "../SectionHeader";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const initialErrors = {
  user_email: "",
  user_subject: "",
  message: "",
};

const Contact = ({ owner }) => {
  const [errors, setErrors] = useState({ ...initialErrors });
  const refForm = useRef();

  const inputs = [
    {
      name: "user_email",
      regex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      error: "Email should be in valid format",
    },
    {
      name: "user_subject",
      regex: /^[a-zA-Z]+$/,
      error: "Subject should contain only letters and max 26 letters",
    },
    {
      name: "message",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    let foundErrors = {};

    inputs.forEach((input) => {
      if (refForm.current[input.name].value === "") {
        foundErrors[input.name] = "Input cannot be empty";
      } else if (
        input.regex &&
        !input.regex.test(refForm.current[input.name].value)
      ) {
        foundErrors[input.name] = input.error;
      }
    });

    if (Object.keys(foundErrors).length !== 0) {
      setErrors({ ...foundErrors });
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_4h64qk3",
        "template_rbs4hvi",
        refForm.current,
        "BJHQJfZgSKWptY6rR"
      );
      refForm.current.user_email.value = "";
      refForm.current.user_subject.value = "";
      refForm.current.message.value = "";
      setErrors({ ...initialErrors });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="contact">
      <SectionHeader title="Contact" number="03" />
      <div className="contact__wrapper">
        <div className="contact__left">
          <h2>Want to message me?</h2>
          <p>
            If you would like to get in touch, email me or send a message with
            the contact form
          </p>
          <div className="contact__email">
            <BsFillEnvelopeFill />
            <h3>{owner.email}</h3>
          </div>
          <div className="contact__social">
            <a
              href={owner.links.facebook}
              className="contact__item contact__item--facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href={owner.links.github}
              className="contact__item contact__item--github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={owner.links.linkedin}
              className="contact__item contact__item--linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="contact__right">
          <form ref={refForm} onSubmit={sendEmail}>
            <label>
              Email adress
              <input
                className={errors.user_email ? "contact__error" : ""}
                type="email"
                name="user_email"
              />
              <span style={{ display: "block" }}>{errors.user_email}</span>
            </label>
            <label>
              Subject
              <input
                className={errors.user_email ? "contact__error" : ""}
                type="text"
                name="user_subject"
              />
              <span style={{ display: "block" }}>{errors.user_subject}</span>
            </label>
            <label>
              Message
              <textarea
                className={errors.user_email ? "contact__error" : ""}
                type="text"
                name="message"
              />
              <span style={{ display: "block" }}>{errors.message}</span>
            </label>
            <button type="submit" className="btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

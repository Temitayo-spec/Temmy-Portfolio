import styles from "../styles/Contact.module.scss";
import Loader from "react-loaders";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xjvzylak");
  if (state.succeeded) {
    return <p>Thanks for reaching out!🎉❤</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form__wrapper}>
      <div className={styles.form__inner}>
        <div className={styles.form__group}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className={styles.form__group}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.form__group}>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={details.message}
            onChange={(e) =>
              setDetails({ ...details, message: e.target.value })
            }
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button className={styles.form__button} type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

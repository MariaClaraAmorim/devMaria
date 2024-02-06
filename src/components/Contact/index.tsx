import styles from "./Contact.module.css";
import { useState } from "react";
import Transition from "../../components/transition/Transition";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { t } from "i18next";
import { IoCafeOutline } from "react-icons/io5";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setNameError(name === "");
      setEmailError(email === "");
      setMessageError(message === "");

      return;
    }

    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ybzk3ck",
        "template_n6x2irr",
        templateParams,
        "WXkuL5X7swvRWuKEr"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Otimo!",
              text: "Mensagem enviada com sucesso!",
              icon: "success",
            });
          }

          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("ERRO AO ENVIAR O EMAIL ", error);
        }
      );
  }

  return (
    <Transition onAnimationComplete={() => {}}>
      <section className={styles.contact}>
        <div className={styles.header_container}>
          <h2> {t("contato.titulo")}</h2>
        </div>

        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.input_box}>
            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="text"
                placeholder={t("contato.titulo")}
                className={`${styles.item} ${nameError ? styles.error : ""}`}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                value={name}
              />

              <div
                id="error_name"
                className={`${styles.error_message} ${
                  nameError ? styles.show_message : ""
                }`}
              >
                Campo nome completo é obrigatório!
              </div>
            </div>

            <div className={`${styles.input_field} ${styles.field}`}>
              <input
                type="email"
                placeholder={t("contato.email")}
                className={`${styles.item} ${emailError ? styles.error : ""}`}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                value={email}
              />

              <div
                id="error_email"
                className={`${styles.error_message} ${
                  emailError ? styles.show_message : ""
                }`}
              >
                Campo e-mail é obrigatório!
              </div>
            </div>
          </div>

          <div className={`${styles.textarea_field} ${styles.field}`}>
            <textarea
              name=""
              placeholder={t("contato.mensagem")}
              id="message"
              cols={30}
              rows={10}
              className={`${styles.item} ${messageError ? styles.error : ""}`}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
              value={message}
            ></textarea>

            <div
              id="error_message"
              className={`${styles.error_message} ${
                messageError ? styles.show_message : ""
              }`}
            >
              Campo mensagem é obrigatório!
            </div>
          </div>

          <div className={styles.btn_box}>
            <button className={styles.btn} type="submit">
              {t("contato.btn")} <IoCafeOutline />
            </button>
          </div>
        </form>
      </section>
    </Transition>
  );
};

export default Contact;

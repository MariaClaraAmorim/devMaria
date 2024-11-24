import { useState } from "react";
import Transition from "../transition";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { IoCafeOutline } from "react-icons/io5";
import './Contact.css';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
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

        try {
            const response = await emailjs.send(
                "service_xajbchd",
                "template_n6x2irr",
                templateParams,
                "WXkuL5X7swvRWuKEr"
            );


            if (response.status === 200) {
                Swal.fire({
                    title: "Ótimo!",
                    text: "Mensagem enviada com sucesso!",
                    icon: "success",
                });
                console.log("EMAIL ENVIADO", response.status, response.text);
                setName("");
                setEmail("");
                setMessage("");
            } else {
                console.error("Erro no envio do e-mail", response);
                Swal.fire({
                    title: "Erro",
                    text: "Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.",
                    icon: "error",
                });
            }
        } catch (error) {
            console.error("Erro ao enviar o e-mail", error);
            Swal.fire({
                title: "Erro",
                text: "Houve um erro ao tentar enviar o e-mail. Por favor, verifique sua conexão.",
                icon: "error",
            });
        }
    };

    return (
        <Transition onAnimationComplete={() => { }}>
            <section className="contact-section">
                <div className="contact-header">
                    <h2>{t("contato.titulo")}</h2>
                </div>

                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="contact-input-group">
                        <div className="contact-input-wrapper">
                            <input
                                type="text"
                                placeholder={t("contato.nome")}
                                className={`contact-input ${nameError ? "error" : ""}`}
                                id="name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError(false);
                                }}
                                value={name}
                            />
                            <div
                                id="error-name"
                                className={`error-message ${nameError ? "show" : ""}`}
                            >
                                Campo nome completo é obrigatório!
                            </div>
                        </div>

                        <div className="contact-input-wrapper">
                            <input
                                type="email"
                                placeholder={t("contato.email")}
                                className={`contact-input ${emailError ? "error" : ""}`}
                                id="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError(false);
                                }}
                                value={email}
                            />
                            <div
                                id="error-email"
                                className={`error-message ${emailError ? "show" : ""}`}
                            >
                                Campo e-mail é obrigatório!
                            </div>
                        </div>
                    </div>

                    <div className="contact-textarea-wrapper">
                        <textarea
                            placeholder={t("contato.mensagem")}
                            id="message"
                            cols={30}
                            rows={10}
                            className={`contact-textarea ${messageError ? "error" : ""}`}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                setMessageError(false);
                            }}
                            value={message}
                        ></textarea>
                        <div
                            id="error-message"
                            className={`error-message ${messageError ? "show" : ""}`}
                        >
                            Campo mensagem é obrigatório!
                        </div>
                    </div>

                    <div className="contact-button-wrapper">
                        <button className="contact-button" type="submit">
                            {t("contato.btn")} <IoCafeOutline className="icon-contact" />
                        </button>
                    </div>
                </form>
            </section>
        </Transition>
    );
};

export default Contact;

import emailjs from "emailjs-com";
import useFadeIn from "../hooks/fade.js";

function Contact() {
  useFadeIn();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89zagci",
        "template_wpw4pwa",
        e.target,
        "MkK7VMzJ2zsK-sEjy"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message!");
        }
      );
  }

  return (
    <div className="Contact" id="contact">
      <div className="contact-title fade-in">Connect with Me</div>
      <div className="contact-line fade-in"></div>

      <form className="contact-form fade-in" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="contact-input"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="contact-input"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>

        <button type="submit" className="contact-btn">
          Stay Connected
        </button>
      </form>
    </div>
  );
}

export default Contact;

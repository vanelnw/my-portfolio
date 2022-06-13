import React, { useState } from "react";
import { BsMessenger } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FcSmartphoneTablet } from "react-icons/fc";
import { client } from "../../Client";
import { images } from "../../constants";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="contact" className="section">
      <div className="app__wrapper app__flex">
        <h2 className="section-title-01">Chat with me</h2>
        <h2 className="section-title-02">Chat with me</h2>
        <div className="app__contact">
          <div className="contact-item-left">
            <div className="app__contact-cards">
              <h2 className="head-text">Let's discuss your project</h2>
              <a href="mailto:hello@micael.com" className="app__contact-card ">
                <h3 className="app__flex">
                  <MdEmail className="icon" color="red" />
                  Email address
                </h3>
                <p className="p-text">vanelnwaba@gmail.com</p>
              </a>
              <a href="tel:+1 (123) 456-7890" className="app__contact-card">
                <h3 className="app__flex">
                  <FcSmartphoneTablet className="icon" />
                  Phone number
                </h3>
                <p className="p-text">+237 690-948-993</p>
              </a>
              <a
                href="https://m.me/vanel.nwaba.1"
                target="_blank"
                className="app__contact-card "
              >
                <h3 className="app__flex">
                  <BsMessenger className="icon" color="blue" />
                  Messenger
                </h3>

                <p className="p-text">send a message</p>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+237690948993"
                target="_blank"
                className="app__contact-card"
              >
                <h3 className="app__flex">
                  <RiWhatsappFill className="icon" color="green" />
                  Whatsapp
                </h3>
                <p className="p-text">+237 690-948-993</p>
              </a>
            </div>
          </div>

          {!isFormSubmitted ? (
            <div className="contact-item-right">
              <div className="app__contact-form ">
                <p>
                  I'm always open to discussing product
                  <br />
                  <span>design work or partnerships.</span>
                </p>
                <div className="app__flex">
                  <input
                    className="p-text"
                    type="text"
                    placeholder="Your Name"
                    name="username"
                    value={username}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="app__flex">
                  <input
                    className="p-text"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <textarea
                    className="p-text"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                  />
                </div>
                <button type="button" className="button" onClick={handleSubmit}>
                  {!loading ? "Send Message" : "Sending..."} <IoIosSend />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

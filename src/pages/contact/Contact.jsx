import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import Card from '../../components/card/Card';
import styles from "./Contact.module.scss";
import { toast } from 'react-toastify';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_rb24yy9",
        "template_9lxbgo6",
        form.current,
        "1TsM-DZjxS_0av5Xc"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section>
      <div className={`container ${styles.contact}`}>
      <h2>Contact Us</h2>
      <div className={styles.section}>
      <form ref={form} onSubmit={sendEmail}>
        <Card cardClass={styles.card}>
        <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>
        <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+234 705 141 6545</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@eshop.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Abuja, Nigeria</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@ZinoTrust</p>
                </span>
              </div>
            </Card>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Contact
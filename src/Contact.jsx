import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35nazrw",
        "template_tztn7hl",
        form.current,
        "p9-0Osd1EWCx5rcmi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
<div className="contactStructure">
    <div className="leftSection"></div>
      <div className="contact">
              <p className="subject">. contacto / contact</p>
      <hr className="separator" />
      <div className="contactHeader">
        <div className="logoContainer">
          <img
            className="contactLogo"
            src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/logo_redondo-1920w.png"
            alt="First slide"
          />
        </div>
        <div className="personalInfo">
          <div className="contactLocation"> / Lisboa</div>
          <div className="contactEmailContainer">
            <div className="contactSlash">/</div>
            <a
              className="contactEmail"
              href="mailto:filipamoreira@atelier-eira.pt?subject=Subject&body=Description"
            >
              filipamoreira@atelier-eira.pt
            </a>
          </div>
          <div className="contactEmailContainer">
            <div className="contactSlash">/</div>

            <a
              className="contactSocial"
              href="https://www.instagram.com/atelier.eira"
            >
              www.instagram.com/atelier.eira
            </a>
          </div>
        </div>
        </div>
      </div>
        
            <div className="rightSection"></div>

      </div>
      
      {/*
        <form ref={form} onSubmit={sendEmail} className="form">
        <label className="formLabel">nome / name</label>
        <input className="input" type="text" name="from_name" />
        <label className="formLabel">email</label>
        <input className="input" type="email" name="from_email" />
        <label className="formLabel">telemóvel / phone</label>
        <input className="input" type="email" name="from_email" />
        <label className="formLabel">mensagem / message</label>
        <textarea className="input" name="message" />
        <input className="submitButton" type="submit" value="Send" />
      </form>
        */}
    </>
  );
};

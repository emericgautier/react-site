import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>35000 Rennes</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0630405512" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 30 40 55 12
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="egagency@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  egagency@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Emeric Gautier - 2022</p>
          </div>
        </div>
        <Buttons left="/projet-4" />
      </div>
    </main>
  );
};

export default Contact;

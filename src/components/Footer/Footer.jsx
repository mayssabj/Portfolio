import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>maissabenjoud@gmail.com</span>
        <div className="f-icons">
         <a href="https://www.instagram.com/mayssa_ben_joud/?hl=fr"><FaInstagram color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100006110507890"><FaFacebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/mayssabj?tab=repositories"> <FaGithub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/ben-joud-mayssa-89b22722b/"> <FaLinkedin color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

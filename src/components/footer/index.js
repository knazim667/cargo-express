import React from "react";
import Icon from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { twitter } from "react-icons-kit/fa/twitter";

import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer mt-auto fixed-bottom">
      <div className="col-lg-4">
        <div className="power h-100 text-left">Powerdby Nazam UI & Markup</div>
      </div>
      <div className="col-lg-4">
        <Icon icon={facebook} size={20} />
        <Icon icon={linkedin} size={20} />
        <Icon icon={twitter} size={20} />
      </div>
      <div className="col-lg-4 text-right">
        <div className="power">Copyright @ UI & markup team Nazam</div>
      </div>
    </footer>
  );
};

export default Footer;

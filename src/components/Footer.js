import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Link target="_blank" to="//manavkothari.netlify.app">
      <Navbar className="text-center text-dark" position="bottom">
        <small className="mx-auto">Developed by Manav Kothari</small>
      </Navbar>
    </Link>
  );
};

export default Footer;

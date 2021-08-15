import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  FooterContainer,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

function FooterMain() {
  return (
    <FooterContainer>
      <SocialMediaWrap>
        <WebsiteRights>My Dhamtari © 2021</WebsiteRights>
      </SocialMediaWrap>

      <SocialIcons>
        <SocialIconLink
          href="https://www.instagram.com/mydhamtari/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink
          href="https://api.whatsapp.com/send?phone=917415519777"
          target="_blank"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.facebook.com/mydhamtari"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook />
        </SocialIconLink>
      </SocialIcons>
      <span className="mt-2 text-white">
        Developed by{" "}
        <a
          href="https://manavkothari.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Manav Kothari
        </a>
      </span>
      <span className="text-muted mb-1">
        Views: <span className="text-white">7.62K</span> (updated on 15/08/21)
      </span>
    </FooterContainer>
  );
}

export default FooterMain;

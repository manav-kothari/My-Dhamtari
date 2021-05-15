import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  FooterContainer,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

function Footer() {
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
    </FooterContainer>
  );
}

export default Footer;

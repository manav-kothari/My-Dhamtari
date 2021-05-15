import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import { MdEventNote } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
const Header = ({ location }) => (
  <>
    <Navbar variant="dark" className="p-2" style={{ background: "#000" }}>
      <Navbar.Brand
        href="/"
        className="mx-auto text-capitalize font-weight-bold"
      >
        {" "}
        <img
          src={logo}
          width="42"
          height="40"
          className="d-inline-block align-to mx-2"
          alt="logo"
        />{" "}
        My Dhamtari
      </Navbar.Brand>
    </Navbar>

    <Navbar className="m-0 p-1 shadow-sm bg-white " sticky="top" bg="white">
      <Nav className="mx-auto">
        <Nav.Link
          href="/shops"
          className="px-4 py-auto nav-link text-success text-center font-weight-bold"
        >
          <AiFillShop size={20} /> Shops
        </Nav.Link>

        <Nav.Link
          href="/news"
          className="px-4 nav-link text-info text-center font-weight-bold"
        >
          <GiNewspaper size={20} /> NewsPaper
        </Nav.Link>

        <Nav.Link
          href="/events"
          className="px-4 nav-link text-danger text-center font-weight-bold"
        >
          <MdEventNote size={20} /> Events
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
);

export default Header;

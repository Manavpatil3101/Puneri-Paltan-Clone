"use client";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Exo } from "next/font/google";
import classes from "./Header.module.css";
import { useState, useEffect, useRef } from "react";
import Toggle from "../Toggle/toggle";

const exo = Exo({
  variable: "exo",
  weight: "600",
  style: "italic",
  subsets: ["latin"],
});

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`position-fixed bg-transparent ${classes.header} ${
        scrollDirection === "down" ? classes.scrollDown : classes.scrollUp
      }`}
    >
      <Container className={classes.nav}>
        <Navbar.Brand href="/home">
          <img src="/logo.gif" className={classes.logo} alt="Logo" />
        </Navbar.Brand>
        <div className={`d-lg-none ${classes.toggleWrapper}`}>
          <Toggle onClick={() => setExpanded((prev) => !prev)} expanded={expanded} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${classes.navlinks}`} >
            <Nav.Link className={`${classes.links} ${exo.className}`} href="/players">
              Players
            </Nav.Link>
            {/* <Nav.Link className={`${classes.links} ${exo.className}`} href="">
              Standings
            </Nav.Link>
            <Nav.Link className={`${classes.links} ${exo.className}`} href="">
              Fixtures
            </Nav.Link> */}
            <Nav.Link className={`${classes.links} ${exo.className}`} href="/paltanworld">
              Paltan World
            </Nav.Link>
            <Nav.Link
              className={`${classes.links} ${exo.className}`}
              href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457"
              target="_blank"
            >
              Tickets
            </Nav.Link>
            {/* <Nav.Link className={`${classes.links} ${exo.className}`} href="">
              Yuva Paltan
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

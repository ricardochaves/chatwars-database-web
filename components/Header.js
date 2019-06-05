import PropTypes from "prop-types";
import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  // { href: '/secret', text: 'Top Secret', authRequired: true },
  { href: "/auth/sign-in", text: "Sign In", anonymousOnly: true },
  { href: "/auth/sign-off", text: "Sign Off", authRequired: true }
];

const getAllowedLinks = isAuthenticated =>
  links
    .filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
    .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly));

const Header = ({ isAuthenticated, currentUrl }) => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">CharWars Database</NavbarBrand>
      <Nav className="ml-auto" navbar>
        {getAllowedLinks(isAuthenticated).map(l => (
          <NavItem>
            <NavLink href={l.href}>{l.text}</NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  </div>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired
};

export default Header;

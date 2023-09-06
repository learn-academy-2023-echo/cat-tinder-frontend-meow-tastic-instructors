import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catLogo from "../assets/cat-logo.png"

const Header = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with cat outline"
            width="100px"
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catindex" className="nav-link">
          See All the Cats
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catnew" className="nav-link">
          Add a New Cat
        </NavLink>
      </NavItem>
      <NavItem>
        <a href="https://simplycats.org/" className="nav-link" target="_blank">
          Adopt a Cat
        </a>
      </NavItem>
    </Nav>
  )
}

export default Header

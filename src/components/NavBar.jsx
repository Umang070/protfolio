import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = (props) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="navbar">
      <h1 className="heading">
        <a
          className="link-underline link-underline-black"
          href="/home"
          target="_blank"
        >
          Umang
        </a>
      </h1>
      <ul className="nav-list">
        {links.map(({ id, link }) => (
          <li key={id} className="nav-link link-underline">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="nav-toggle">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="nav-menu">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-item px-4 cursor-pointer capitalize text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

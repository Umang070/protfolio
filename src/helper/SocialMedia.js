import React from "react";
import PropTypes from "prop-types";
import Iconify from "../components/Iconify";
import { SOCIAL_LINKS } from "./Constant";

// ----------------------------------------------------------------------

export default function SocialLinks() {
  return (
    <div className="flex space-x-5">
      {SOCIAL_LINKS.map(({ icon, link }, index) => (
        <a
          key={`link ${index}`}
          href={link}
          rel="noreferrer"
          target="_blank"
          className="dark:border-primary-500 inline-flex items-center rounded-full border border-primary-400 p-2.5 text-center text-sm font-medium text-primary-700 transition hover:bg-primary-700/50 hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:text-primary-300 dark:hover:bg-primary-400 dark:hover:text-neutral-50 dark:focus:ring-primary-800"
        >
          <Iconify classes="text-xl" icon={icon} />
        </a>
      ))}
    </div>
  );
}

// ----------------------------------------------------------------------

SocialLinks.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
};

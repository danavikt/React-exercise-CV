import React from "react";
import data from "./data";
import "./index.scss";

import IconLink from "./IconLink";

function Footer() {
  return (
    <footer className="Footer">
      {data.map(({ href, icon }) => (
        <IconLink href={href} target="_blank" icon={icon} />
      ))}
    </footer>
  );
}

export default Footer;

import React from "react";

function IconLink(props) {
  const { href, target, icon: Icon } = props;
  // const Component = component; pasiima ir pervadina su didziaja raide
  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

export default IconLink;

import React from "react";
import { Avatar } from "@material-ui/core";
import { Container } from "./styled";

function SidebarRow({ src, Icon, title }) {
  return (
    <Container>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </Container>
  );
}

export default SidebarRow;

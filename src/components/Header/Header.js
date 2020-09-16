import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  HeaderInput,
  HeaderSearchWrapper,
  HeaderOptions,
  HeaderInfo,
  Container,
} from "./styled";

function Header() {
  return (
    <Container className="header">
      <HeaderLeft>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/FaceB.png"
          alt=""
        />
        <HeaderSearchWrapper>
          <SearchIcon fontSize="large" />
          <HeaderInput placeholder="Facebook'ta Ara" />
        </HeaderSearchWrapper>
      </HeaderLeft>
      <HeaderMiddle>
        <HeaderOptions className="active">
          <HomeIcon fontSize="large" />
        </HeaderOptions>
        <HeaderOptions>
          <FlagIcon fontSize="large" />
        </HeaderOptions>
        <HeaderOptions>
          <SubscriptionsIcon fontSize="large" />
        </HeaderOptions>
        <HeaderOptions>
          <StorefrontIcon fontSize="large" />
        </HeaderOptions>
        <HeaderOptions>
          <SupervisorAccountIcon fontSize="large" />
        </HeaderOptions>
      </HeaderMiddle>
      <HeaderRight>
        <HeaderInfo>
          <Avatar fontSize="large" />
          <h4>Muhammet</h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </HeaderInfo>
      </HeaderRight>
    </Container>
  );
}

export default Header;

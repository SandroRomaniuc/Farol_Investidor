import React from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  SearchAndNotification,
  ContentSearchAndNotification,
  Notification,
  User,
  Title,
} from "./styles";

import Search from "../../assets/images/search.png";
import Notifications from "../../assets/images/notifications.svg";

function Header() {
  let { id } = useParams();

  return (
  <Container>
    <Title>{id}</Title>

    <ContentSearchAndNotification>
      <SearchAndNotification>
        <img src={Search} alt="search" />

        <Notification>
          <img src={Notifications} alt="notifications" />
          <span>3</span>
        </Notification>
      </SearchAndNotification>

      <User>
        Humberto Junior
        <img
          src="https://avatars0.githubusercontent.com/u/6500430?s=460&v=4"
          alt="avatar"
        />
      </User>
    </ContentSearchAndNotification>
  </Container>
  );
}

export default Header;

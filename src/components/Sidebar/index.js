import React from 'react';
import { Link } from "react-router-dom";

//assets
import Logo from '../../assets/images/logo.png';
import Overview from '../../assets/images/overview.svg';
import Tickets from '../../assets/images/tickets.svg';
import Ideas from '../../assets/images/ideas.svg';
import Contacts from '../../assets/images/contacts.svg';
import Agents from '../../assets/images/agents.svg';
import Settings from '../../assets/images/settings.svg';
import Articles from '../../assets/images/articles.svg';

//Styles
import { Container, Nav, Title } from "./styles";

export default function Sidebar() {
  return (
    <Container>

      <div>
        <Nav>
          <img src={Logo} alt="Logo Farol Investidor" />
          <li>
            <Link to="/overview" className="title"><Title>Farol Investidor</Title></Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <Link to="/overview"><img src={Overview} alt="Overview" />Home</Link>
          </li>
          <li>
            <Link to="/tickets"><img src={Tickets} alt="Tickets" />Startups</Link>
          </li>
          <li>
            <a href="!"><img src={Agents} alt="Agents" />Investidores</a>
          </li>
          <li>
            <a href="/credits"><img src={Articles} alt="Articles" />Créditos</a>
          </li>
          <li>
            <a href="!"><img src={Contacts} alt="Contacts" />Contacts</a>
          </li>
        </Nav>

        <Nav>
          <hr />
          <li>
            <a href="!"><img src={Settings} alt="Settings" />Profile</a>
          </li>
          <li>
            <a href="!"><img src={Settings} alt="Settings" />Settings</a>
          </li>
        </Nav>
      </div>

    </Container>
  );
}

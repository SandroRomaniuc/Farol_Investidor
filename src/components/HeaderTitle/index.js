import React from 'react';
import { Link } from "react-router-dom";

import { Container, TitleText, SubTitleText } from './styles';

const HeaderTitle = props => (
  <Container>
    <div>
      <TitleText>{props.title}</TitleText>
      <SubTitleText>{props.subtitle}</SubTitleText>
    </div>
    <Link to={`/${props.link}`}>{props.textLink}</Link>
  </Container>
);

export default HeaderTitle;

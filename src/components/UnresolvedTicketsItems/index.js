import React from 'react';

import { Container, TitleText, Numbers } from './styles';

const UnresolvedTicketsItems = props => (
  <Container>
    <TitleText>{props.title}</TitleText>
    <Numbers>{props.number}</Numbers>
  </Container>
);

export default UnresolvedTicketsItems;

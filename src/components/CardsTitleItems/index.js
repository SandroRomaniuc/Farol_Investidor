import React from 'react';

import { Container, TitleText } from './styles';

const CardsTitleItems = props => (
  <Container>

    <TitleText>{props.title}</TitleText>
  </Container>
);

export default CardsTitleItems;

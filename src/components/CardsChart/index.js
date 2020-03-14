import React from 'react';

import { Container, Title, Information } from './styles';

const CardsChart= props => (
  <Container>
    <Title>{props.title}</Title>
    <Information>{props.info}</Information>
  </Container>
);

export default CardsChart;

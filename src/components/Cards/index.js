import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Cards({ children, size }) {
  return (
    <Container>
      <Content size={size}>{children}</Content>
    </Container>
  );
}

Cards.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  size: PropTypes.string,
};

Cards.defaultProps = {
  size: 'default',
};

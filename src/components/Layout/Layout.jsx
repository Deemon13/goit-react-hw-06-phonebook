import React from 'react';

import { Container, Title } from './Layout.styled';

export const Layout = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

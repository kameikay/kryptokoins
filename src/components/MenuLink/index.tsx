import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface IMenuLink {
  isActive?: boolean;
  to: string;
  children: ReactNode;
  isMenuOpen: boolean;
}

export default function MenuLink({
  isActive,
  to,
  children,
  isMenuOpen,
}: IMenuLink) {
  return (
    <Container isActive={isActive} isMenuOpen={isMenuOpen}>
      <Link to={to}>{children}</Link>
    </Container>
  );
}

MenuLink.defaultProps = {
  isActive: false,
};
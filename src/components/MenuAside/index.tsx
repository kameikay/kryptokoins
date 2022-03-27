import React, { useState } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';
import { iconsPath } from '../../utils/iconsPath';
import { CustomIcon } from '../CustomIcon';
import { Container } from './styles';

import MenuLink from '../MenuLink';

import logo from '/assets/icons/logo.png';

import { MenuHamburguerIcon } from '../MenuHamburguerIcon';

const menuLinks = [
  {
    to: '/home',
    path: iconsPath.home,
    name: 'Home',
  },
  {
    to: '/dashboard',
    path: iconsPath.dashboard,
    name: 'Dashboard',
  },

  {
    to: '/config',
    path: iconsPath.config,
    name: 'Configuração',
  },
];

export function MenuAside() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Container isMenuOpen={isMenuOpen}>
      <img src={logo} alt="Logo Congelatech" className="logo" />
      <MenuHamburguerIcon
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <nav>
        {!isMenuOpen
          && menuLinks.map((link) => (
            <MenuLink
              to={link.to}
              isActive={pathname === link.to}
              key={link.to}
              isMenuOpen={isMenuOpen}
            >
              <CustomIcon path={link.path} />
            </MenuLink>
          ))}
        {isMenuOpen
          && menuLinks.map((link) => (
            <MenuLink
              to={link.to}
              isActive={pathname === link.to}
              key={link.to}
              isMenuOpen={isMenuOpen}
            >
              <CustomIcon path={link.path} />
              <span>{link.name}</span>
            </MenuLink>
          ))}
      </nav>

      <Link to="/" className="logout">
        <CustomIcon path={iconsPath.logout} />
        {isMenuOpen && <span>Sair</span>}
      </Link>
    </Container>
  );
}
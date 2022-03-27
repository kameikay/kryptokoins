import React from 'react';

import { iconsPath } from '../../utils/iconsPath';
import { CustomIcon } from '../CustomIcon';
import { Container } from './styles';

interface IMenuHamburguerIcon {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuHamburguerIcon({
  isMenuOpen,
  setIsMenuOpen,
}: IMenuHamburguerIcon) {
  return (
    <Container onClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen}>
      <CustomIcon height={16} path={iconsPath.menu} />
      <CustomIcon width={10} height={10} path={iconsPath.menuArrow} />
    </Container>
  );
}
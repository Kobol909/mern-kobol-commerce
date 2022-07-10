/**
 *
 *
 */
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const NavigationContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary}33;
  border-bottom: ${({ theme }) => theme.border};
  display: flex;
  height: 6vh;
  font-family: ${defaultTheme.fontFamily.sans};
  padding: ${defaultTheme.padding.md} ${defaultTheme.padding.sm};
  text-decoration: none;
`;

export const LogoContainer = styled(Link)`
  background-color: ${Colors.transparent};
  text-decoration: none;
`;

export const NavbarLinks = styled.nav`
  align-items: center;
  background-color: ${Colors.transparent};
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 100%;

  & > * {
    margin-right: 2vh;
  }
`;

export const NavbarLink = styled(Link)`
  background-color: ${Colors.transparent};
  border-bottom: ${({ theme }) => theme.background};
  cursor: pointer;
  font-family: ${defaultTheme.fontFamily.sans};
  font-size: ${defaultTheme.fontSize.caption};
  letter-spacing: ${defaultTheme.letterSpacing.wide};
  padding: 0 ${defaultTheme.padding.xl};
  text-decoration: none;

  &:active {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }
`;

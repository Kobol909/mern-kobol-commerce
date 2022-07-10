import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const SidebarContainer = styled.div`
  border-right: ${({ theme }) => theme.border};
  align-items: baseline;
  background-color: ${({ theme }) => theme.backgroundSecondary}54;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  height: 94vh;
  left: 0;
  max-width: 15vw;
  padding: ${defaultTheme.padding.md} 0;
  text-decoration: none;
  width: fit-content;
`;

export const TitleContainer = styled.div`
  align-items: start;
  background-color: ${Colors.transparent};
  display: flex;
  justify-content: center;
  height: 10vh;
  margin: ${defaultTheme.margin.xl} auto;
  padding: ${defaultTheme.padding.xl} ${defaultTheme.padding.md};

  &:last-child {
    padding-right: 0;
  }
`;

export const Title = styled.h2`
  background-color: ${Colors.transparent};
  font-family: ${defaultTheme.fontFamily.sans};
  font-size: ${defaultTheme.fontSize['2xl']};
  font-weight: ${defaultTheme.fontWeight.medium};
  letter-spacing: ${defaultTheme.letterSpacing.wider};
  margin: auto;
`;

export const SidebarLinks = styled.div`
  background-color: ${Colors.transparent};
  display: grid;
  margin: ${defaultTheme.margin.xl};
`;

export const SubContainer = styled.div`
  background-color: ${Colors.transparent};
  border-bottom: 1px solid ${({ theme }) => theme.backgroundSecondary}54;
  display: grid;
  margin: ${defaultTheme.margin.md} ${defaultTheme.margin.xl};

  &:hover {
    border-bottom: ${({ theme }) => theme.border};
  }
`;

export const SidebarLink = styled(Link)`
  background-color: ${Colors.transparent};
  border-left: ${({ theme }) => theme.background};
  cursor: pointer;
  font-family: ${defaultTheme.fontFamily.sans};
  font-size: ${defaultTheme.fontSize.md};
  letter-spacing: ${defaultTheme.letterSpacing.wide};
  padding: ${defaultTheme.padding.lg} 0;
  text-decoration: none;
  white-space: nowrap;

  &:active {
    border-left: 2px solid ${({ theme }) => theme.border};
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  background-color: ${Colors.transparent};
  display: flex;
  justify-content: center;

  &:last-child {
    display: block !important;
    padding-left: ${defaultTheme.padding.md};
  }

  & > svg {
    align-items: center;
    background-color: ${Colors.transparent};
    fill: ${({ theme }) => theme.fill};
    height: ${defaultTheme.height.xxl};
    margin-top: ${defaultTheme.margin.xs};
    padding: ${defaultTheme.padding.xs};
    stroke: ${({ theme }) => theme.fill};
    stroke-width: 0px;
    width: ${defaultTheme.width.xxl};
  }
`;

export const IconContainerLink = styled(Link)`
  align-items: center;
  background-color: ${Colors.transparent};
  display: flex;
  justify-content: center;

  &:last-child {
    display: block !important;
    padding-left: ${defaultTheme.padding.md};
  }

  & > svg {
    align-items: center;
    background-color: ${Colors.transparent};
    fill: ${({ theme }) => theme.fill};
    height: ${defaultTheme.height.xxl};
    margin-top: ${defaultTheme.margin.xs};
    padding: ${defaultTheme.padding.xs};
    stroke: ${({ theme }) => theme.fill};
    stroke-width: 0px;
    width: ${defaultTheme.width.xxl};
  }
`;

export const CollapseSidebarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
  right: 0;
  margin: ${defaultTheme.margin.xl} 0 auto auto;
  background-color: ${Colors.transparent};
  border-top: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  width: ${defaultTheme.width.fit};

  &:hover {
    background-color: ${({ theme }) => theme.fill}33;
    cursor: pointer;
  }
`;

import styled from 'styled-components';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const ThemeToggleButton = styled.button`
  background-color: ${Colors.transparent};
  border: none;
  display: inline-block;
  cursor: pointer;
  height: ${defaultTheme.height.xl};
  margin: auto 1vh;
  width: ${defaultTheme.width.xl};
  text-decoration: none;

  & > svg {
    background-color: ${Colors.transparent};
    fill: ${({ theme }) => theme.fill};
    stroke: ${({ theme }) => theme.fill};
    stroke-width: 1px;
  }
`;

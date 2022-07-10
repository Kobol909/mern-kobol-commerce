import styled from 'styled-components';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const LogoContainer = styled.span`
  background-color: ${Colors.transparent};
  cursor: pointer;
  height: ${defaultTheme.height.xxl};
  width: ${defaultTheme.height.xxl};

  & > svg {
    background-color: ${Colors.transparent};
    fill: ${({ theme }) => theme.fill};
    stroke: ${({ theme }) => theme.fill};
    stroke-width: 0.025px;
  }
`;

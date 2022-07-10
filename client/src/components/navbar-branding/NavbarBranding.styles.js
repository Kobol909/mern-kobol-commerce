import styled from 'styled-components';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const Brand = styled.div`
  background-color: ${Colors.transparent};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1`
  background-color: ${Colors.transparent};
  font-size: ${defaultTheme.fontSize.display1};
  font-family: ${defaultTheme.fontFamily.mono};
  font-weight: bold;
  letter-spacing: ${defaultTheme.letterSpacing.wider};
  margin-left: 1vh;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
`;

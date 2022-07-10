import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const AccountDetailsContainer = styled.section`
  align-items: baseline;
  background-color: ${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: ${defaultTheme.margin.xxl};
  width: ${defaultTheme.width.screen};
`;

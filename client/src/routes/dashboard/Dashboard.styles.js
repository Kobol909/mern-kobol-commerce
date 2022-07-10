import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const DashboardContainer = styled.section`
  align-items: baseline;
  border: ${({ theme }) => theme.border};
  background-color: ${Colors.blue[500]};
`;

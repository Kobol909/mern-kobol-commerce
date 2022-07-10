import styled from 'styled-components';

import { Colors } from '../../resources/themes/Colors';
import { defaultTheme } from '../../resources/themes/ThemeDefault';

export const CartIconContainer = styled.div`
  align-items: center;
  background-color: ${Colors.transparent};
  cursor: pointer;
  display: flex;
  height: ${defaultTheme.height.xxl};
  padding: ${defaultTheme.padding.xs} 0;
  width: ${defaultTheme.width.xxl};
  
  & > svg {
    background-color: ${Colors.transparent};
    stroke-width: 1px;
    fill: ${({ theme }) => theme.fill};
    stroke: ${({ theme }) => theme.fill};
`;

export const ItemCount = styled.span`
  background-color: ${Colors.transparent};
  font-family: ${defaultTheme.fontFamily.sans};
  margin-left: 1.6rem;
  position: absolute;
`;

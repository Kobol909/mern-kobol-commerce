import styled from 'styled-components';

import { Colors } from '../../resources/themes/Colors';

import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/Button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 30vh;
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${Colors.zinc[900]};
  background-color: ${Colors.zinc[50]};
  top: 7.5vh;
  right: 3vh;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

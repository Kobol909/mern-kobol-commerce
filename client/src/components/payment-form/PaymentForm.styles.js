import styled from 'styled-components';

import { defaultTheme } from '../../resources/themes/ThemeDefault';

import Button from '../button/Button.component';

export const PaymentFormContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${defaultTheme.spacing.medium}px 0;
`;

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  background-color: ${({ theme }) => theme.backgroundTertiary};
  margin-left: auto;
  margin-top: 30px;
`;

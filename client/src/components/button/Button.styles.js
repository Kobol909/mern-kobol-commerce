import styled from 'styled-components';

import { Colors } from '../../resources/themes/Colors';

export const BaseButton = styled.button`
  align-items: center;
  background-color: ${Colors.zinc[900]};
  border: none;
  color: ${Colors.zinc[200]};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.font};
  font-size: 1.4vh;
  font-weight: bold;
  height: 5vh;
  min-width: 15vh;
  justify-content: center;
  letter-spacing: 0.2vh;
  line-height: 15vh;
  padding: 0 4vh;
  text-transform: uppercase;
  width: auto;

  &:hover {
    background-color: ${Colors.zinc[200]};
    border: 1px solid ${Colors.zinc[900]};
    color: ${Colors.zinc[900]};
  }
`;

export const AddToCartButton = styled(BaseButton)``;

export const BuyNowButton = styled(BaseButton)``;

export const CheckoutButton = styled(BaseButton)``;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: ${Colors.blue[500]};
  color: ${Colors.zinc[200]};

  &:hover {
    background-color: ${Colors.blue[400]};
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${Colors.zinc[200]};
  border: 1px solid ${Colors.zinc[900]};
  color: ${Colors.zinc[900]};

  &:hover {
    background-color: ${Colors.zinc[900]};
    border: none;
    color: ${Colors.zinc[200]};
  }
`;

export const LearnMoreButton = styled(BaseButton)``;

export const LoadingSpinner = styled.div`
  animation: spin 1s ease-in-out infinite;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  display: inline-block;
  height: 3vh
  width: 3vh
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const SignInButton = styled(BaseButton)``;

export const SignUpButton = styled(BaseButton)``;

export const ThemeToggleButton = styled(BaseButton)``;

export const SubscribeButton = styled(BaseButton)``;

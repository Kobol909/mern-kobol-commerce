import styled, { css } from 'styled-components';

import { Colors } from '../../resources/themes/Colors';

const shrinkLabelStyles = css`
  top: -1.4vh;
  font-size: 1.2vh;
  color: ${Colors.zinc[200]};
`;

export const FormInputLabel = styled.label`
  color: ${Colors.zinc[400]};
  font-size: 1.4vh;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5vh;
  top: 1vh;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: ${Colors.zinc[50]};
  color: ${Colors.zinc[400]};
  font-size: 2vh;
  padding: 1vh 1vh 1vh 0.5vh;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${Colors.zinc[400]};
  margin: 4vh 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 4vh 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

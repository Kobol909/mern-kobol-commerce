import styled from 'styled-components';

export const CategoryContainer = styled.div`
  column-gap: 4vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto 4vh;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font};
  font-size: 3.4vh;
  font-weight: normal;
  margin-bottom: 4vh;
  letter-spacing: 0.2vh;
  text-align: center;
  text-decoration: none;
`;

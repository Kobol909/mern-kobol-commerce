import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vh;
`;

export const Title = styled(Link)`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 3vh;
  font-weight: normal;
  margin-bottom: 2vh;
  text-decoration: none;
`;

export const Preview = styled.div`
  column-gap: 4vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

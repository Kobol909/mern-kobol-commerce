import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 2.5px;
  height: 100%;
  transform: scale(1.1);
  width: 100%;
`;

export const Body = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 10%;
  justify-content: center;
  opacity: 0;
  padding: 0 25px;
  position: absolute;
  width: 25%;

  h2 {
    color: black;
    font-size: 32px;
    font-weight: bold;
    margin: 0 6px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    font-weight: lighter;
  }
`;

export const DirectoryItemContainer = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  flex: 1 1 auto;
  height: 340px;
  justify-content: center;
  margin: 1% 15%;
  min-width: 30%;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1);
      transition: transform 1.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      opacity: 0.5;
    }

    ${Body} {
      opacity: 1.5;
      transition: transform 1.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      transform: scale(1.2);
    }
  }
`;

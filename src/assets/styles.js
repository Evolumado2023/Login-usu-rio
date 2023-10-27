// styles.js
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: rgb(238, 36, 228);
  width: 300px;
  color: #fff;
  font-size: 18pt;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid rgb(238, 36, 228);
  border-radius: 15px;
  font-family: 'Sans-serif';
  margin-top: 5em;

  &:hover {
    background-color: transparent;
  }
`;

export const StyledText = styled.p`
  font-size: 18pt;
  color: #FFF;
  margin-top: 3em;

`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Isso pode ser ajustado dependendo da altura desejada */
`;



export const FormStyle = styled.form`
  color: #FFF;
  font-size: 16pt;
  width: 800px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;




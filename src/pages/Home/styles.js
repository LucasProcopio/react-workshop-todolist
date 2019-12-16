import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.9);

  &:before {
    background: rgba(255, 255, 255, 0.6);
    content: '';
    display: block;
    height: 10px;
    opacity: 0.5;
    width: 480px;
    top: -10px;
    left: 10px;
    position: absolute;
  }

  &:after {
    background: rgba(255, 255, 255, 0.6);
    content: '';
    display: block;
    height: 10px;
    opacity: 0.3;
    width: 460px;
    top: -20px;
    left: 20px;
    position: absolute;
  }

  form {
    width: 100%;
    display: flex;
  }
`;

export const Header = styled.h1`
  color: #f1f1f1;
  font-size: 28px;
  font-weight: normal;
  letter-spacing: 2px;
  word-spacing: 5px;
  margin-bottom: 35px;
`;

export const TextInput = styled.input`
  border: 0;
  height: 50px;
  padding: 10px 15px;
  color: #555;
  font-weight: normal;
  font-size: 16px;
  width: 100%;

  :focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 0;
  background-color: rgba(157, 5, 0, 0.3);
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: rgba(157, 5, 0, 0.45);
  }
`;

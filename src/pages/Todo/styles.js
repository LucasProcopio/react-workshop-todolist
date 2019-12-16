import styled from 'styled-components';

export const List = styled.ul`
  background: #fff;
  border-top: 1px solid rgba(157, 5, 0, 0.4);
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(157, 5, 0, 0.4);
  padding: 10px;
  height: 50px;
`;

export const Title = styled.span`
  margin-left: 25px;
  font-size: 16px;
  color: ${props => (props.done ? 'rgba(157, 5, 0, 0.8)' : '#333')};
  word-spacing: 1.2px;
  letter-spacing: 1.3px;
  padding-bottom: 5px;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

export const ItemContainer = styled.span`
  display: flex;
  justify-content: center;
`;

export const RemoveItem = styled.button`
  border: 0;
  background: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ToggleItem = styled.button`
  border: 0;
  background: none;
`;

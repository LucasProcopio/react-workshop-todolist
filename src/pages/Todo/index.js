import React from 'react';
import { map } from 'lodash';

import { FaToggleOn, FaToggleOff, FaTrashAlt } from 'react-icons/fa';
import {
  List,
  ListItem,
  Title,
  ItemContainer,
  RemoveItem,
  ToggleItem
} from './styles';

export default function Todo({ todoList, removeItem, toggleItem }) {
  return (
    <List>
      {map(todoList, function(item) {
        return (
          <ListItem key={item.id}>
            <ItemContainer>
              <ToggleItem onClick={() => toggleItem(item.id)}>
                {item.done ? (
                  <FaToggleOn fill="#0f0" size={20} />
                ) : (
                  <FaToggleOff fill="#ddd" size={20} />
                )}
              </ToggleItem>
              <Title done={item.done}>{item.title}</Title>
            </ItemContainer>
            <RemoveItem onClick={() => removeItem(item.id)}>
              <FaTrashAlt fill="#f00" size={15} />
            </RemoveItem>
          </ListItem>
        );
      })}
    </List>
  );
}

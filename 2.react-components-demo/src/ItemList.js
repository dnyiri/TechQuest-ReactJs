// src/ItemList.js
import React from 'react';
import Item from './Item';

function ItemList() {
  const items = [
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'Description 3' },
  ];

  return (
    <div>
      <h1>Item List</h1>
      {items.map((item, index) => (
        <Item key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default ItemList;

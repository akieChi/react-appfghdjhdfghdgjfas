import React from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

interface InventoryListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({ items, onDeleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Quantity: {item.quantity}
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default InventoryList;
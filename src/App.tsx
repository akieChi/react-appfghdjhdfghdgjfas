import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import InventoryList from './InventoryList';
import Message from './message';
import RegistrationForm from './RegistrationForm';
import QRCodeGenerator from './QRCodeGenerator';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [qrItem, setQrItem] = useState<Item | null>(null);

  const addItem = (name: string, quantity: number) => {
    const newItem = { id: items.length + 1, name, quantity };
    setItems([...items, newItem]);
    setMessage({ type: 'success', text: 'Item added successfully!' });
  };

  const registerItem = (name: string, quantity: number) => {
    const newItem = { id: items.length + 1, name, quantity };
    setItems([...items, newItem]);
    setQrItem(newItem);
    setMessage({ type: 'success', text: 'Item registered successfully!' });
  };

  const deleteItem = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    setMessage({ type: 'success', text: 'Item deleted successfully!' });
  };

  return (
    <div>
      <h1>Inventory System - NIA UPRIIS Division 3</h1>
      {message && <Message type={message.type} text={message.text} />}
      <RegistrationForm onRegisterItem={registerItem} />
      {qrItem && <QRCodeGenerator itemName={qrItem.name} itemId={qrItem.id} />}
      <AddItemForm onAddItem={addItem} />
      <InventoryList items={items} onDeleteItem={deleteItem} />
    </div>
  );
};

export default App;
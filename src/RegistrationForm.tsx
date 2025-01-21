import React, { useState } from 'react';

interface RegistrationFormProps {
  onRegisterItem: (name: string, quantity: number) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegisterItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && quantity > 0) {
      onRegisterItem(name, quantity);
      setName('');
      setQuantity(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="submit">Register Item</button>
    </form>
  );
};

export default RegistrationForm;
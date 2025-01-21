import React from 'react';
import QRCode from 'react-qr-code'; // Ensure default import is used

interface QRCodeGeneratorProps {
  itemName: string;
  itemId: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ itemName, itemId }) => {
  const qrValue = `Item: ${itemName}, ID: ${itemId}`;

  return (
    <div>
      <QRCode value={qrValue} />
      <p>{qrValue}</p>
    </div>
  );
};

export default QRCodeGenerator;
import React from 'react';

const CardModal = ({ card, onClose }) => {
  if (!card) return null;
  console.log('CardModal rendered with card:', card);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
            src={`images/cards/card_${card.index + 1}.JPG`}
            alt={`Card ${card.index + 1}`}
            className="modal-card-image"
        />
        <div className="modal-card-details">
          {/* Add any additional card details here */}
        </div>
      </div>
    </div>
  );
};

export default CardModal;
import React from 'react';

const SnakeModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (event) => {
        event.stopPropagation();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50" onClick={handleBackdropClick}>
            <div className="modal-container p-8 md:p-12 rounded shadow-lg max-w-md mx-auto relative" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    {children} {/* Content passed as children */}
                </div>
            </div>
        </div>
    );
};

export default SnakeModal;
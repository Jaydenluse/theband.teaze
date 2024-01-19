import React from 'react';

const LinkModal = ({ album, isOpen, onClose }) => {
    if (!isOpen || !album) return null;

    const handleBackdropClick = (event) => {
        event.stopPropagation(); // Prevents modal content clicks from propagating
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50" onClick={handleBackdropClick}>
            <div className="phone-modal bg-white p-8 md:p-12 shadow-lg max-w-md mx-auto rounded-lg relative" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-6 text-2xl text-gray-600 hover:text-gray-800"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="phone-modal-text text-xl font-bold mb-8">Teaze - {album.title}</h2>
                <div className="space-y-4">
                    {album.links.map((link, index) => (
                        <div key={index} className="phone-links flex justify-between border-2 items-center bg-gray-100 rounded transition-colors p-2">
                            <div className="flex items-center">
                                <img src={link.image} alt={link.title} className="logo mr-8" />
                            </div>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="phone-play py-2 px-4 bg-gray-400 items-center text-white rounded hover:bg-gray-700 transition-colors"
                            >
                                Play
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LinkModal;
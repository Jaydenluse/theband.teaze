import React from 'react';

const LinkModal = ({ album, isOpen, onClose, snake}) => {
    if (!isOpen || !album) return null;

    const handleBackdropClick = (event) => {
        event.stopPropagation(); // Prevents modal content clicks from propagating
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50" onClick={handleBackdropClick}>
            <div className="phone-modal bg-black bg-opacity-75 p-8 md:p-12 shadow-lg max-w-md mx-auto relative rounded" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-6 text-2xl text-white hover:text-gray-800"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="phone-modal-text text-2xl font-bold mb-8 text-white text-center">Teaze - '{album.title}'</h2>
                <div className="space-y-4">
                {album.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="phone-links block border-1 border-white bg-gray-500 bg-opacity-50 hover:bg-pink-700 transition-colors p-2"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={link.image} alt={link.title} className="logo mr-10 ml-8 mt-2 mb-2" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
);};

export default LinkModal;
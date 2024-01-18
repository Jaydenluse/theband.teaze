import React from 'react';

const LinkModal = ({ video, isOpen, onClose }) => {
    if (!isOpen || !video) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
        <div className="bg-white p-8 md:p-12 shadow-lg max-w-md mx-auto rounded-lg">
          <h2 className="text-xl font-bold mb-4">{video.snippet.title}</h2>
          <div className="space-y-4">
            {video.links.map((link, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-100 rounded transition-colors p-2">
                <div className="flex items-center">
                  <img src={link.image} alt={link.title} className="logo mr-8" />
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Play
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={onClose}
            className="mt-4 w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
};
export default LinkModal;
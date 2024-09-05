import React, { useState } from 'react';

function HoverModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal on hover
  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal when the mouse leaves
  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="relative mt-16">
      {/* The element that triggers the modal */}
      <div
        className="p-4 bg-blue-500 text-white rounded"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </div>
      {/* The modal itself */}
      {isModalVisible && (
        <div
          className="absolute top-12 left-0 p-4 bg-white border border-gray-300 rounded shadow-lg"
          onMouseEnter={handleMouseEnter} // Keep modal open if hovering over it
          onMouseLeave={handleMouseLeave} // Hide modal if mouse leaves
        >
          <p>This is a hover modal!</p>
          <a href="">oawefw</a>
          <a href="">odasw</a>
          <a href="">oaew</a>
          <a href="">awedweo</a>
          <a href="">oawefawef</a>
        </div>
      )}
    </div>
  );
}

export default HoverModal;

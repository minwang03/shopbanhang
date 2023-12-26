import React from 'react';

const ExampleCarouselImage = ({ imageUrl, text }) => {
  const imageStyle = {
    width: '100%',
    height: '500px',
    // objectFit: 'cover',
  };

  return (
    <img
      className="d-block w-100"
      style={imageStyle}
      src={imageUrl}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;

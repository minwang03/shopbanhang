import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  const imageStyle = {
    width: '100%',
    height: '500px',

  };

  return (
    <img
      className="d-block w-100"
      style={imageStyle}
      src={`https://via.placeholder.com/400x400?text=${text}`}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;

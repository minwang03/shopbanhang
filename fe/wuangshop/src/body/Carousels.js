import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage.js';
import Images1 from './images/Screenshot 2023-10-10 102852.png';
import Images2 from './images/images.jpg';
import Images3 from './images/doge-shiba-inu-microsoft-windows-memes-wallpaper-preview.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      imageUrl: Images1,
      text: 'Slide 1 label',
      description: 'Description for slide 1.',
    },
    {
      imageUrl: Images2,
      text: 'Slide 2 label',
      description: 'Description for slide 2.',
    },
    {
      imageUrl: Images3,
      text: 'Slide 3 label',
      description: 'Description for slide 3.',
    },
  ];

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={3000}
      pause={false} // Set to false to prevent pausing on hover
      fade // Use fade transition
    >
      {slides.map((slide, i) => (
        <Carousel.Item key={i}>
          <ExampleCarouselImage text={slide.text} imageUrl={slide.imageUrl} />
          <Carousel.Caption>
            <h3>{slide.text}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;

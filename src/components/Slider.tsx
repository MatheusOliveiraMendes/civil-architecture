import { useState, useEffect } from "react";

const images = [
  "/images/slide.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg"
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-screen h-screen flex justify-end items-start">
      <div className="relative w-[70vw] h-[100vh]">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
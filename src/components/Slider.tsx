import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";

const images = [
  "/images/slide.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg"
];

const captions = [
  "/images/caption.jpg",
  "/images/caption2.jpg",
  "/images/caption3.jpg"
];

const titles = [
  {
    top: "Hangzhou, China",
    middle: "2100 Club",
    bottom: "The world’s first blockchain bar",
    button: "Saiba Mais"
  },
  {
    top: "Milan, Italy",
    middle: "Villa Echo",
    bottom: "Large 3-bedroom holiday villa",
    button: "Saiba Mais"
  },
  {
    top: "Cleveland, United States",
    middle: "Museum",
    bottom: "Rock and Roll Hall of Fame",
    button: "Saiba Mais"
  }
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
      <img
          src={captions[index]}
          alt={`Caption ${index + 1}`}
          className="absolute left-0 object-contain"
          style={{
            width: "320px",
            height: "500px",
            top: "60%",
            left: "30%",
            transform: "translate(-50%, -50%)"
          }}
        />  

      <div className="absolute text-white" style={{ top: "70%", left: "60%", transform: "translate(-50%, -50%)" }}>
        <h3 className="text-md">{titles[index].top}</h3>
        <h1 className="text-8xl text-orange-300 font-bold my-4">{titles[index].middle}</h1>
        <h3 className="text-md">{titles[index].bottom}</h3>
        <button className="mt-6 px-12 py-2 rounded-full border-2 border-orange-300 text-white hover:bg-orange-300 hover:text-black transition">
          {titles[index].button}
        </button>
      </div>
      <div className="absolute bottom-8 left-8 flex flex-col items-center space-y-4">
          <p className="text-white p-6 rotate-270 text-sm ">Siga - nos</p>
           <div className="w-px h-24 bg-white"></div>
        <div className="flex flex-col space-y-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300 transition">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default Slider;
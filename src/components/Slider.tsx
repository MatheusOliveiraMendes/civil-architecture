import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const images = ["/images/slide.jpg", "/images/slide2.jpg", "/images/slide3.jpg"];

const captions = [
  "/images/caption.jpg",
  "/images/caption2.jpg",
  "/images/caption3.jpg",
];

const titles = [
  {
    top: "Hangzhou, China",
    middle: "2100 Club",
    bottom: "The world’s first blockchain bar",
    button: "Saiba Mais",
  },
  {
    top: "Milan, Italy",
    middle: "Villa Echo",
    bottom: "Large 3-bedroom holiday villa",
    button: "Saiba Mais",
  },
  {
    top: "Cleveland, United States",
    middle: "Museum",
    bottom: "Rock and Roll Hall of Fame",
    button: "Saiba Mais",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prevIndex) => (prevIndex + 1) % images.length),
      12000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-stretch overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/10" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between">
        <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col-reverse gap-14 px-6 pb-20 pt-40 lg:flex-row lg:items-end lg:justify-between lg:gap-24">
          <div className="relative flex flex-1 justify-start">
            <div className="relative w-full max-w-md border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="overflow-hidden border border-white/10">
                <img
                  src={captions[index]}
                  alt={`Ambientação ${index + 1}`}
                  className="h-[420px] w-full object-cover transition duration-700 ease-out"
                />
              </div>
              <div className="mt-6 space-y-2 text-sm text-gray-200">
                <p className="font-semibold uppercase tracking-[0.3em] text-orange-200">Destino</p>
                <p className="text-lg text-gray-100">{titles[index].top}</p>
                <p className="text-sm text-gray-400">
                  Um olhar exclusivo sobre projetos de arquitetura visionária ao redor do mundo.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xl space-y-8">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.6em] text-orange-200">
              <span className="h-px w-10 bg-orange-300" />
              {titles[index].top}
            </span>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold uppercase leading-tight text-orange-200 sm:text-6xl lg:text-7xl">
                {titles[index].middle}
              </h1>
              <p className="text-base text-gray-300 sm:text-lg">{titles[index].bottom}</p>
            </div>
            <div className="flex items-center gap-6">
              <button className="border border-orange-300 px-10 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-orange-100 transition hover:bg-orange-200 hover:text-neutral-950">
                {titles[index].button}
              </button>
              <button
                onClick={() =>
                  setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
                }
                className="hidden h-12 w-12 items-center justify-center border border-white/20 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-orange-200 hover:text-orange-200 md:flex"
              >
                Prev
              </button>
              <button
                onClick={() => setIndex((prevIndex) => (prevIndex + 1) % images.length)}
                className="hidden h-12 w-12 items-center justify-center border border-white/20 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:border-orange-200 hover:text-orange-200 md:flex"
              >
                Next
              </button>
            </div>
            <div className="flex items-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-10 transition ${
                    i === index ? "bg-orange-300" : "bg-white/20"
                  }`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between px-6 pb-12">
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.5em] text-gray-400">
            <span className="flex items-center gap-3">
              <span className="h-px w-12 bg-white/40" />
              Civil Architecture
            </span>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 transform flex-col items-center gap-4 md:flex">
        <span className="-rotate-90 text-xs uppercase tracking-[0.4em] text-gray-400">Siga-nos</span>
        <span className="h-24 w-px bg-white/30" />
        <div className="pointer-events-auto flex flex-col gap-4 text-gray-200">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-300"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-300"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-300"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slider;

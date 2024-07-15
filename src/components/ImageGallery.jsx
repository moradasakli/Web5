import React, { useRef } from "react";

function ImageGallery({ images, onImageClick }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 1000;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-r-md z-10"
      >
        &#8592; {/* Left arrow */}
      </button>
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide py-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Random ${index}`}
            className="w-[200px] h-[200px] rounded shadow-lg cursor-pointer object-cover flex-shrink-0"
            onClick={() => onImageClick(img)}
          />
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-l-md z-10"
      >
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
}

export default ImageGallery;

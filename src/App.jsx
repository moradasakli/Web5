import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import SelectedImage from "./components/SelectedImage";

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const newImages = [];
    for (let i = 0; i < 20; i++) {
      newImages.push(`https://picsum.photos/1920/1080?random=${i}`);
    }
    setImages(newImages);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyle = {
    backgroundColor: isDarkMode ? "#1a202c" : "#fff",
    color: isDarkMode ? "#fff" : "#1a202c",
    minHeight: "100vh",
  };

  return (
    <div style={appStyle} className="flex flex-col">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ImageGallery images={images} onImageClick={handleImageClick} />
        <SelectedImage selectedImage={selectedImage} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

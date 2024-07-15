import React from "react";

function SelectedImage({ selectedImage }) {
  if (!selectedImage) return null;

  return (
    <div className="mt-8">
      <img
        src={selectedImage}
        alt="Selected Image"
        className="w-auto mx-auto h-auto rounded shadow-lg"
      />
    </div>
  );
}

export default SelectedImage;

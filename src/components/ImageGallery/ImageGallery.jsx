import React from 'react';
import GalleryItem from '../ImageGalleryItem/ImageGalleryItem'; 

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
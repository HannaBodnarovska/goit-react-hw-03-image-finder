import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
    return (
      <li className="gallery-item">
        <img
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => onClick(image.largeImageURL)}
        />
      </li>
    );
};

export default ImageGalleryItem;

import React from 'react';

const GalleryItem = ({ image, onClick }) => {
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

export default GalleryItem;

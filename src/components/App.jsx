import React, { useState } from 'react';
import axios from 'axios'; 

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    loadImages(newQuery, 1);
  };

  const loadImages = (query, currentPage) => {
    const API_KEY = '39068391-0e28b65d96db8d37b502b2dfc';
    const PER_PAGE = 12;

    setLoading(true);

    axios
      .get('https://pixabay.com/api/', {
        params: {
          key: API_KEY,
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: PER_PAGE,
          page: currentPage,
        },
      })
      .then((response) => {
        setImages([...images, ...response.data.hits]);
        setPage(currentPage + 1);
      })
      .catch((error) => console.error('Error:', error))
      .finally(() => setLoading(false));
  };

  const handleLoadMore = () => {
    loadImages(query, page);
  };

  const handleImageClick = (largeImageURL) => {
    setSelectedImage(largeImageURL);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} disabled={loading} />}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;

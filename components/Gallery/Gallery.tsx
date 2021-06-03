import { useState } from 'react';

import { GalleryImage } from 'types';

import GalleryLightbox from './GalleryLightbox';
import GalleryItem from './GalleryItem';

import styles from './Gallery.module.scss';

type Props = {
  gallery: GalleryImage[];
};

const Gallery = ({ gallery }: Props): JSX.Element => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <GalleryLightbox
        showModal={lightboxOpen}
        gallery={gallery}
        imageIndex={currentImageIndex}
        onClose={handleClose}
        setImage={setCurrentImageIndex}
      />
      <ul className={styles.gallery}>
        {gallery.map((el, i) => (
          <GalleryItem
            url={el.url}
            text={el.text}
            key={el.id}
            onClick={() => handleClick(i)}
          />
        ))}
      </ul>
    </>
  );
};

export default Gallery;

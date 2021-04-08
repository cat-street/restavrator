import React, { FC, useState, memo } from 'react';

import GalleryLightbox from './GalleryLightbox';
import GalleryItem from './GalleryItem';

import styles from './Gallery.module.scss';

type Props = {
  type: string;
  gallery: { id: string; url: string; text: string }[];
};

const Gallery: FC<Props> = memo(({ type, gallery }: Props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
    // setCurrentImageIndex(0);
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
});

export default Gallery;

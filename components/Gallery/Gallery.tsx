import { useState } from 'react';

import { GalleryImage } from 'types';

import GalleryLightbox from './GalleryLightbox';
import GalleryItem from './GalleryItem';

import styles from './Gallery.module.scss';

type Props = {
  type: string;
  gallery: GalleryImage[];
};

const Gallery = ({ type, gallery }: Props): JSX.Element => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
  };
  console.log(styles.gallery_type_rectangle);

  return (
    <>
      <GalleryLightbox
        showModal={lightboxOpen}
        gallery={gallery}
        imageIndex={currentImageIndex}
        onClose={handleClose}
        setImage={setCurrentImageIndex}
      />
      <ul className={`${styles.gallery} ${styles[`gallery_type_${type}`]}`}>
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

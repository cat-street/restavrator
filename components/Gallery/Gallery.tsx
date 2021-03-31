import React, { FC, useState } from 'react';

import GalleryLightbox from './GalleryLightbox/GalleryLightbox';
import styles from './Gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';

type Props = {
  type: string;
};

const gallery = [
  {
    url: '/images/projects/sample/kazah_01.jpg',
    text: 'ВДНХ, Павильон "Казахстан"',
  },
  {
    url: '/images/projects/sample/bnik2_01.jpg',
    text: 'Городская усадьба, 1-я пол. XIX в. - Главный дом',
  },
  {
    url: '/images/projects/sample/bnik1_01.jpg',
    text: 'Городская усадьба, 1-я пол. XIX в. - Флигель',
  },
];

const Gallery: FC<Props> = ({ type }: Props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
  };

  return (
    <>
      {lightboxOpen && (
        <GalleryLightbox
          gallery={gallery}
          imageIndex={currentImageIndex}
          onClose={handleClose}
          setImage={setCurrentImageIndex}
        />
      )}
      <ul className={styles.gallery}>
        {gallery.map((el, i) => (
          <GalleryItem
            url={el.url}
            text={el.text}
            key={Math.random()}
            onClick={() => handleClick(i)}
          />
        ))}
      </ul>
    </>
  );
};

export default Gallery;

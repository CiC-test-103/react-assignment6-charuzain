import React from 'react';
import drawerImage from '../../../images/drawers.jpg';
import styles from '../CardImage/CardImage.module.css';

const CardImage = () => {
  return (
    <div className="image-container">
      <img
        src={drawerImage}
        alt="Furniture drawer"
        className={styles['card-image']}
      />
    </div>
  );
};

export default CardImage;

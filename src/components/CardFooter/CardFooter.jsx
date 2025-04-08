import { useState } from 'react';
import shareIcon from '../../../images/icon-share.svg';
import styles from '../CardFooter/CardFooter.module.css';
import Share from '../Share/Share';


const CardFooter = () => {
  const [display, setDisplay] = useState(false);
  const shareHandler = () => {
    setDisplay(!display);
  };
  return (
    <div className={styles['card-footer']}>
      <div className={styles['user-section']}>
        <div className={styles['avatar-wrapper']}></div>
        <div className={styles['user-details']}>
          <h3 className={styles['user-name']}>Michelle Appleton</h3>
          <p className={styles['date']}>28 Jun 2020</p>
        </div>
      </div>
     <div
        className={`${styles['share-button']} ${display ? styles['btn-gray'] : ''}`}
        onClick={shareHandler}
      >
        <img
          src={shareIcon}
          alt="Share Icon"
          className={`${display ? styles['share-icon'] : ''}`}
        />
      </div>
      {display && <Share/>}
    </div>
  );
};

export default CardFooter;

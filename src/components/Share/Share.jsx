import styles from '../Share/Share.module.css';
import facebookIcon from '../../../images/icon-facebook.svg';
import pinterestIcon from '../../../images/icon-pinterest.svg';
import twitterIcon from '../../../images/icon-twitter.svg';

const Share = () => {
  return (
    <div className={styles['share-container']}>
      <div className={styles['share-content']}>
        <p className={styles['share-title']}>Share</p>
        <div className={styles['share-icons']}>
          <img src={facebookIcon} alt="Facebook Icon" />
          <img
            src={twitterIcon}
            alt="Twitter Icon"
            className={styles['twitter-icon']}
          />
          <img src={pinterestIcon} alt="Pinterest Icon" />
        </div>
      </div>
    </div>
  );
};

export default Share;

import '../Share/Share.css';
import facebookIcon from '../../../images/icon-facebook.svg';
import pinterestIcon from '../../../images/icon-pinterest.svg';
import twitterIcon from '../../../images/icon-twitter.svg';

const Share = () => {
  return (
    <div className="share-container">
      <div className='share-content'>
        <p className='share-title'>Share</p>
        <div className="share-icons">
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={twitterIcon} alt="Twitter Icon" />

          <img src={pinterestIcon} alt="Pinterest Icon" />
        </div>
      </div>
    </div>
  );
};

export default Share;

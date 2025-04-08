import { CardContent } from '../CardContent/CardContent';
import CardImage from '../CardImage/CardImage';
import CardFooter from '../CardFooter/CardFooter';
import styles from '../Card/Card.module.css';

const Card = () => {
  return (
    <div className={styles['card']}>
      <CardImage />
      <div className={styles['card-body']}>
        <CardContent />
        <CardFooter />
      </div>
    </div>
  );
};

export default Card;

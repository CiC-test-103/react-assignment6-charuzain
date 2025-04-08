import styles from '../CardContent/CardContent.module.css';

export const CardContent = () => {
  return (
    <>
      <h1 className={styles['card-title']}>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className={styles['card-description']}>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
    </>
  );
};

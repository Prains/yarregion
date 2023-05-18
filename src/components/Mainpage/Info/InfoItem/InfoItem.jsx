import styles from './InfoItem.module.scss'

function InfoItem({text, block}) {
  return (
    <div className={block}>
      <div className={styles.ellipse}></div>
      <p>{text}</p>
    </div>
  );
}
 
export default InfoItem;
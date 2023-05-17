import styles from '../Info.module.scss'
import InfoItem from '../InfoItem/InfoItem';

const InfoSection = ({ data }) => {
  return (
    <>
      <h4 className={styles.info__title}>{data.title}</h4>
      <article className={data.gap}>
        {data.elements.map((elem) => (
          <InfoItem key={elem.text} text={elem.text} block={data.size} />
        ))}
      </article>
    </>
  );
};


export default InfoSection;
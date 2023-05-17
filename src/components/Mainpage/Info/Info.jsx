import styles from "./Info.module.scss";
import InfoItem from "./InfoItem/InfoItem";
import {dataInfo} from "../../../utils/dataInfo";
const Info = () => {
  return (
    <section>
      {dataInfo.map((key) => (
        <InfoSection key={key.title} data={key} styles={styles} />
      ))}
    </section>
  );
};

const InfoSection = ({ data, styles }) => {
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

export default Info;


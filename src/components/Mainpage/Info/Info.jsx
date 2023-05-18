import styles from "./Info.module.scss";
import {dataInfo} from "../../../utils/datainfo";
import InfoSection from "./InfoSection/InfoSection";
const Info = () => {
  return (
    <section>
      {dataInfo.map((key) => (
        <InfoSection key={key.title} data={key} styles={styles} />
      ))}
    </section>
  );
};

export default Info;


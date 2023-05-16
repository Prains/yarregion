import i from "./Info.module.scss";
import InfoItem from "./InfoItem/InfoItem";
import {dataInfo} from "../../../utils/dataInfo";

const Info = () => {
  return (
    <section>
      {dataInfo.map((item) => {
        return (
          <>
            <h4 className={i.info__title}>{item.title}</h4>
            <article className={item.gap}>
              {item.elements.map((elem) => {
                return <InfoItem text={elem.text} block={item.size} />;
              })}
            </article>
          </>
        );
      })}
    </section>
  );
};

export default Info;

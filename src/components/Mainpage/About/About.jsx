import styles from "./About.module.scss";
import AboutInfo from "./AboutInfo/AboutInfo";
import List from "./List/List";


const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.aboutTitle}>О нас</h2>
      <div className={styles.wrapper}>
      <AboutInfo/>
      <List/>
      </div>
    </section>
  );
};

export default About;


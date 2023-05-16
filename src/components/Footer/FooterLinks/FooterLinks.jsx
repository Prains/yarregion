import styles from "./Footer.module.css";

export const FooterLinks = ({ FooterText }) => {
  return (
    <ul className={styles.links__grid_container}>
      {FooterText.map((item) => (
        <li key={item.id}>
          <a href="#">{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

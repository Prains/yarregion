import styles from "./Footer.module.css";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import FooterLogo from "./FooterLogo/FooterLogo";

function Footer({owner}) {
  
  const FooterText1 = [{
    id: 1,
    text: 'О регионе'
  },
  {
    id: 2,
    text: 'Предпринимателю'
  },
  {
    id: 3,
    text: 'Инвестору'
  },
  {
    id: 4,
    text:  'Для НКО'
  }]
  
  const FooterText2 = [{
    id: 5,
    text: 'Начинающему предпринимателю'
  },
  {
    id: 6,
    text: 'Инвестиционная карта'
  },
  {
    id: 7,
    text: 'Туристу'
  },
  {
    id: 8,
    text:  'Торги'
  }]
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <FooterLogo />
        <div className={styles.footer__info}>
          <p>Представительство Ярославской области</p>
          <p>{owner.address}</p>
          <p>{owner.phone}</p>
          <p className={styles.footer__info_Email}><a href='mailto:{owner.email}'>{owner.email}</a></p>
        </div>
        <div className={styles.footer_links}>
          <nav className={styles.footer__grid_container}>
            <FooterLinks FooterText={FooterText1}/>
            <FooterLinks FooterText={FooterText2}/>
          </nav>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
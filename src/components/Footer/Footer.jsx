import styles from "./Footer.module.css";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import FooterLogo from "./FooterLogo";

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
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <FooterLogo />
        <div className={styles.footer__info}>
          <p>Представительство Ярославской области</p>
          <p>{owner.address}</p>
          <p>{owner.phone}</p>
          <div className={styles.footer__info_EmailAddress}>
            <p>{owner.email}</p>
          </div>
        </div>
        <div className={styles.footer_links}>
          <nav className={styles.footer__grid_container}>
            <FooterLinks FooterText={FooterText1}/>
            <FooterLinks FooterText={FooterText2}/>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Footer;
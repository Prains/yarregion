import styles from "./Footer.module.css";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import FooterLogo from "./FooterLogo";

function Footer({owner}) {
  const FooterText1 = {
    links1: 'О регионе',
    links2: 'Предпринимателю',
    links3: 'Инвестору',
    links4: 'Для НКО'
  }
  const FooterText2 = {
    links1: 'Начинающему предпринимателю',
    links2: 'Инвестиционная карта',
    links3: 'Туристу',
    links4: 'Торги'
  }
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
          <div className={styles.footer__grid_container}>
            <FooterLinks FooterText={FooterText1}/>
            <FooterLinks FooterText={FooterText2}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

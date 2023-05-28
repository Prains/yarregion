import styles from "./Header.module.scss";
import logo from '../../images/Header/logo.svg'
const Header = () => {
  return <div className={styles.header}>
    <div className={styles.logoBlock}>
        <a href='#' className={styles.logoImg}>
        <object
          type="image/svg+xml"
          data="logo.svg">
          <img src={logo}/>
        </object>
      </a>
      <h1 className={styles.title}>ПРЕДСТАВИТЕЛЬСТВО ПРАВИТЕЛЬСТВА<br/> ЯРОСЛАВСКОЙ ОБЛАСТИ</h1>
      <div>ОФИЦИАЛЬНЫЙ ПОРТАЛ</div>
    </div>
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="#">Новости</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Инвестиционные  встречи</a></li>
          <li><a href="#">Предпринимателю</a></li>
          <li><a href="#">Инвестору</a></li>
          <li><a href="#">НКО</a></li>
          <li><a href="#">Туристу</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>

        <button>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.2282 22.9564C18.6009 22.9564 22.9564 18.6009 22.9564 13.2282C22.9564 7.85547 18.6009 3.5 13.2282 3.5C7.85547 3.5 3.5 7.85547 3.5 13.2282C3.5 18.6009 7.85547 22.9564 13.2282 22.9564Z" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.5 24.5L21 21" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      </nav>
    </div>
  </div>
};

export default Header;

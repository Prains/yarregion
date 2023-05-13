import styles from './Footer.module.css'
import Logo from '../../../images/Footer/Logo.jpg'

function Footer(props) {

    return (
        <div className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.Logo}>
                    <a href='#HomePage'><img className={styles.footer_Logo} src={Logo} alt="Logo" /></a></div>
                <div className={styles.footer__info}>
                    <p>Представительство Ярославской области</p>
                    <p>{props.address}</p>
                    <p>{props.phone}</p>
                    <div className={styles.footer__info_EmailAddress}><p>{props.email}</p>
                    </div>
                </div>
                <div className={styles.footer__links_1}>
                    <a href="#">О регионе</a>
                    <a href="#">Предпринимателю</a>
                    <a href="#">Инвестору</a>
                    <a href="#">Для НКО</a>
                </div>
                <div className={styles.footer__links_2}>
                    <a href="#">Начинающему предпринимателю</a>
                    <a href="#">Инвестиционная карта</a>
                    <a href="#">Туристу</a>
                    <a href="#">Торги</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
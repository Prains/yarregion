import Logo from "../../images/Footer/Logo.svg";
import styles from "./Footer.module.css";

function FooterLogo() {
    return (
        <div className={styles.footer__logo}>
            <a href="/">
                <img className={styles.logo} src={Logo} alt="Logo" />
            </a>
        </div>
    );
}
export default FooterLogo;

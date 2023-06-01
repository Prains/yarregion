import styles from "./Header.module.scss";
import logo from "../../images/Header/logo.svg";
import find from "../../images/Header/find.svg";
import { HeaderNav } from "./HeaderNav/HeaderNav";

const Header = () => {
	const NavList = [
		{
			id: 1,
			text: "Новости",
		},
		{
			id: 2,
			text: "О нас",
		},
		{
			id: 3,
			text: "Инвестиционные встречи",
		},
		{
			id: 4,
			text: "Предпринимателю",
		},
		{
			id: 5,
			text: "Инвестору",
		},
		{
			id: 6,
			text: "НКО",
		},
		{
			id: 7,
			text: "Туристу",
		},
		{
			id: 8,
			text: "Контакты",
		},
	];

	return (
		<header className={styles.header}>
			<div className={styles.logoBlock}>
				<a href="/" className={styles.logoImg}>
					<img src={logo} alt="logo" />
				</a>
				<h1 className={styles.title}>
					ПРЕДСТАВИТЕЛЬСТВО ПРАВИТЕЛЬСТВА
					<br /> ЯРОСЛАВСКОЙ ОБЛАСТИ
				</h1>
				<p>ОФИЦИАЛЬНЫЙ ПОРТАЛ</p>
			</div>
			<div className={styles.container}>
				<HeaderNav items={NavList} />
				<button>
					<img src={find} alt="find" />
				</button>
			</div>
		</header>
	);
};

export default Header;

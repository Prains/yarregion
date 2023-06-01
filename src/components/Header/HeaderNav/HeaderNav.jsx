import styles from "./HeaderNav.module.scss";

export const HeaderNav = ({ items }) => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<a href="#">{item.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

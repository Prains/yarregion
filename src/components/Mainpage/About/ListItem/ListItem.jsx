import styles from './ListItem.module.scss'

function ListItem({number,head,text}) {
  return (
    <li className={styles.listItem}>
      <div className={styles.numBox}>{number}</div>
			<div className={styles.textBox}>
				<h3 className={styles.title}>{head}</h3>
				<p className={styles.text}>{text}</p>
			</div>
    </li>
  );
}
 
export default ListItem;
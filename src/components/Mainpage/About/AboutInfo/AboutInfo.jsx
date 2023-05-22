import styles from "./AboutInfo.module.scss";
import frame from '../../../../images/Main/About/frame.png'
import {useEffect, useRef,useState} from 'react';



const AboutInfo = () => {
	const [isActive, setIsActive] = useState(true);

const handleHover = event => {
	setIsActive(current => !current);
};


	return (
			<div className={styles.aboutInfo}>
				<img src={frame} className={styles.img}/>
				<p className={styles.p}>
					Представительство правительства Ярославской области является официальной
					организацией, которая представляет интересы области на федеральном
					уровне, в целях ее экономического и социального развития.
				</p>
				<button 
					className={isActive ? styles.btn : styles.btnHover}
					onMouseEnter={handleHover}
					onMouseLeave={handleHover}
				>
					Подробнее
				</button>
		</div>
		
	);
};

export default AboutInfo;

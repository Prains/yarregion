import React from 'react'
import styles from './Footer.module.css'

export const FooterLinks = ({FooterText}) => {
    
  return (
    <ul className={styles.links__grid_container}>
              <li><a href="#">{FooterText.links1}</a></li>
              <li><a href="#">{FooterText.links2}</a></li>
              <li><a href="#">{FooterText.links3}</a></li>
              <li><a href="#">{FooterText.links4}</a></li>
            </ul>
  )
}

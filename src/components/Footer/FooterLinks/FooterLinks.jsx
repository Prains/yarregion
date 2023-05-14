import React from 'react'
import styles from './Footer.module.css'

export const FooterLinks = ({ FooterText }) => {

  return (
    <nav className={styles.links__grid_container}>
      <ul>
        <li><a href="#">{FooterText.links1}</a></li>
        <li><a href="#">{FooterText.links2}</a></li>
        <li><a href="#">{FooterText.links3}</a></li>
        <li><a href="#">{FooterText.links4}</a></li>
      </ul>
    </nav>
  )
}

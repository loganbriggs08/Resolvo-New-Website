import React from 'react';
import styles from './footer.module.css';

export default function FooterComponent() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footer_bottom}>
        <p className={styles.copy_right_text}>
          &copy; Copyright 
          <span className={styles.current_year}> {new Date().getFullYear()}</span> Resolvo Development
        </p>
        <div className={styles.footer_bottom_links}>
          <a href="/privacy" className={styles.bottom_link}>Cookie Policy</a> | 
          <a href="/privacy" className={styles.bottom_link}>Privacy Policy</a> | 
          <a href="/terms" className={styles.bottom_link}>Terms & Conditions</a> | 
          <a href="/terms" className={styles.bottom_link}>Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

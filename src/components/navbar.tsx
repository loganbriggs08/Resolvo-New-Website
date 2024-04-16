'use client'

import styles from "./navbar.module.css";

export default function NavbarComponent() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_row}>
            <img src="truffles_icon_cool.png" className={styles.truffles_icon} />

            <div className={styles.centeral_links}>
                <a>Home</a>
                <a>Previous Work</a>
                <a>Home</a>
                <a>Terms</a>
                <a>Privacy</a>
            </div>
        </div>
    </div>
  );
}

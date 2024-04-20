'use client'

import styles from "./navbar.module.css";
import { handleScrollToContact, handleScrollToViewWork } from "@/functions/scroll";

export default function NavbarComponent() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_row}>
          <a href="/"><img src="resolvo_logo_transparent.png" className={styles.resolvo_logo} /></a>
          
          <div className={styles.centeral_links}>
            <a className={styles.link} href="/">Home</a>
            <a className={styles.link} onClick={() => {handleScrollToViewWork}}>View Work</a>
            <a className={styles.link} onClick={() => {handleScrollToContact}}>Contact Us</a>
            <a className={styles.link} href="/terms">Terms</a>
            <a className={styles.link} href="/privacy">Privacy</a>
          </div>

          <div className={styles.end_buttons}>
            <a href="mailto:hello@resolvo.dev" className={styles.end_link}>Contact Us</a>

            <button className={styles.view_work_button} onClick={() => {handleScrollToViewWork()}}>
              View Work
            </button>
          </div>
        </div>
    </div>
  );
}

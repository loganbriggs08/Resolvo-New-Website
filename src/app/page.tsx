'use client'

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { handleScrollToContact, handleScrollToViewWork } from "@/functions/scroll";

export default function Home() {
  const words: string[] = ["MOBILE APPS", "DESKTOP APPS", "WEBSITES", "DISCORD BOTS"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main className={styles.main}>

      <div className={styles.top_seperator}/>

      <div className={styles.top_section}>
        <div className={styles.slide_down}>
          <div className={styles.top_section_left_side}>
            <p className={styles.we_develop_text}>WE DEVELOP</p>

            <h1 className={styles.changing_text}>{words[currentIndex]}<a className={styles.changing_text_full_stop}>.</a></h1>

            <p className={styles.changing_text_description}>
              Resolve Problems, don’t re-solve. We believe problems should only have <br />
              to be solved once and once only. Our code is designed to last from <br />
              the beginning.
            </p>

            <div className={styles.top_section_buttons}>
              <button className={styles.top_section_view_work_button} onClick={() => {handleScrollToViewWork()}}>
                View Work

                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.view_work_arrow}>
                  <path d="M1 9L5 5L1 1" stroke="#FAFAFA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <a onClick={() => {handleScrollToContact()}} className={styles.top_section_contact_us_button}>Contact Us</a>
            </div>

            <div className={styles.statistics_wrapper}>
              <div className={styles.statistics_divider}><a></a></div>

              <div className={styles.statistical_numbers}>
                <div className={styles.statistic_text}>
                  <h1 className={styles.number_statistic}>500k+</h1>
                  <p className={styles.description_statistic}>Lines of Code Written</p>
                </div>

                <div className={styles.statistic_text}>
                  <h1 className={styles.number_statistic}>50+</h1>
                  <p className={styles.description_statistic}>Projects Completed</p>
                </div>

                <div className={styles.statistic_text}>
                  <h1 className={styles.number_statistic}>50+</h1>
                  <p className={styles.description_statistic}>Positive Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.top_section_right_side}>
          <a href="https://github.com/loganbriggs08" target="_blank">
            <img src="code_editor.png" className={styles.code_editor_image} />
          </a>
        </div>
      </div>

      <div className={styles.arrow_down}>
        <svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 2L17 17L2 2" stroke="white" stroke-width="4.5"/>
        </svg>
      </div>

      <div className={styles.top_seperator}/>

      <div className={styles.what_have_we_made} id="view-work">
        <h1 className={styles.header_text}>What have we made?</h1>
        <p className={styles.description_text}>
          We have previously worked on a range of projects from full stack <br />
          websites to iOS & Android apps.
        </p>

        <div className={styles.project_cards}>
          <div className={styles.project_card}>
            <img src="resolvo_development_website.png" className={styles.project_image} />


            <h1 className={styles.project_title_text}>
              <a className={styles.new_tag}>NEW</a> Resolvo Website - 2024
            </h1>
            <p className={styles.project_description_card_text}>This website was made as a way to reach potential clients and was coded in React (NextJS) & Typescript along with a sprinkle of CSS.</p>

            <a href="https://resolvo.dev" className={styles.project_button}>
              View Website 
            </a>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.project_card}>
            <img src="resolvo_development_old_website.png" className={styles.project_image} />

            <h1 className={styles.project_title_text}>
              <a className={styles.new_tag}>OLD</a> Resolvo Website - 2023
            </h1>
            <p className={styles.project_description_card_text}>This was the old Resolvo website which was used to reach clients and was coded in React (NextJS) and Typescript with some CSS.</p>

            <a href="https://github.com/loganbriggs08/Resolvo-Website" target="_blank" className={styles.project_button}>
              View Github 
            </a>
          </div>

          <div className={styles.card_seperator}/>
          
          <div className={styles.project_card}>
            <img src="your_project.png" className={styles.project_image} />

            <h1 className={styles.project_title_text}>
              <a className={styles.new_tag}>NEW</a> Your Project - {new Date().getFullYear()}
            </h1>
            <p className={styles.project_description_card_text}>Your project could be displayed here after we finish it. Contact us to complete your project and then request your project to be shown here.</p>

            <a href="mailto:hello@resolvo.dev" className={styles.project_button}>
              Contact Us
            </a>
          </div>
        </div>
      </div>


      <div className={styles.top_seperator} />

      <div className={styles.why_choose_us} id="why-choose-us">
        <h1 className={styles.header_text}>Why choose us?</h1>
        <p className={styles.description_text}>
          There are thousands of developers that would code your project for<br />
          you so why should you go with us?
        </p>

        <div className={styles.choose_us_cards}>
          <div className={styles.choose_us_card}>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.83333 1.66663L1.5 11.6666H9L8.16667 18.3333L16.5 8.33329H9L9.83333 1.66663Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1 className={styles.header_card_text}>Quick Delivery</h1>
            <p className={styles.description_card_text}>As soon as we gather all the information needed about your project we begin to start building it.</p>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.choose_us_card}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99992 18.3333C9.99992 18.3333 16.6666 15 16.6666 9.99996V4.16663L9.99992 1.66663L3.33325 4.16663V9.99996C3.33325 15 9.99992 18.3333 9.99992 18.3333Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1 className={styles.header_card_text}>Trusted</h1>
            <p className={styles.description_card_text}>We have a long history of providing a high quality of service & support to our loyal customer base.</p>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.choose_us_card}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2499 5.24994C11.0972 5.40572 11.0117 5.61515 11.0117 5.83328C11.0117 6.0514 11.0972 6.26083 11.2499 6.41661L12.5832 7.74994C12.739 7.90263 12.9484 7.98816 13.1665 7.98816C13.3847 7.98816 13.5941 7.90263 13.7499 7.74994L16.8915 4.60828C17.3106 5.53427 17.4374 6.56597 17.2553 7.5659C17.0731 8.56582 16.5905 9.48648 15.8718 10.2052C15.1531 10.9239 14.2324 11.4065 13.2325 11.5887C12.2326 11.7708 11.2009 11.644 10.2749 11.2249L4.51655 16.9833C4.18503 17.3148 3.73539 17.501 3.26655 17.501C2.79771 17.501 2.34807 17.3148 2.01655 16.9833C1.68503 16.6518 1.49878 16.2021 1.49878 15.7333C1.49878 15.2644 1.68503 14.8148 2.01655 14.4833L7.77488 8.72494C7.35585 7.79895 7.22898 6.76725 7.41116 5.76732C7.59335 4.7674 8.07595 3.84674 8.79465 3.12804C9.51334 2.40935 10.434 1.92675 11.4339 1.74456C12.4339 1.56237 13.4656 1.68925 14.3915 2.10828L11.2582 5.24161L11.2499 5.24994Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1 className={styles.header_card_text}>Continued Support</h1>
            <p className={styles.description_card_text}>Even after your project is completed we will continue to provided you with continued high quality support.</p>
          </div>      
        </div>
      </div>

      <div className={styles.top_seperator} />

      <div className={styles.need_to_contact_us} id="contact-us">
        <h1 className={styles.header_text}>Need to contact us?</h1>
        <p className={styles.description_text}>
          What are you waiting for? Contact us and lets build your project <br />
          together - if your still not convinced request a call.
        </p>


        <div className={styles.bottom_section_buttons}>
          <a href="mailto:hello@resolvo.dev" className={styles.bottom_section_contact_us_button}>Contact Us</a>

          <button className={styles.bottom_section_view_work_button}>
            View Work
          </button>
        </div>
      </div>

      <div className={styles.top_seperator} />
    </main>
  );
}

'use client'

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const words: string[] = ["MOBILE APPS", "DESKTOP APPS", "WEB-BASED APPS", "DISCORD BOTS"];
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
      <div className={styles.top_section}> 
        {/* <div className={styles.lets_work_together_tag}>
          <p className={styles.lets_work_together_tag_text}>Let’s work together.</p>
        </div> */}

        <div className={styles.left_section}>
          {/* <p className={styles.lets_work_together}>Let's work together.</p> */}

          <h2 className={styles.we_develop_text}>WE DEVELOP</h2>
          <h1 className={styles.changing_text}>
              {words[currentIndex]}<a className={styles.white_dot}>.</a>
          </h1>
          <p className={styles.changing_text_description}>
            Resolve Problems, don’t re-solve. We believe problems should only have to <br />
            be solved once and once only. Our code is designed to last from the <br />
            beginning.
          </p>

          <div className={styles.top_section_buttons}>
            <button className={styles.view_work_button}>
              View Work

              {/* <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow_right_svg}>
                <path d="M1 9L5 5L1 1" stroke="#FAFAFA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> */}
            </button>

            <div className={styles.top_section_button_seperator} />

            <button className={styles.contact_us_button}>
              Contact Us
            </button>
          </div>

          <div className={styles.top_section_statistics}>
            <div className={styles.line_seperator}><a></a></div>
              
              <div className={styles.statistical_data}>
                <div className={styles.statistical_data_wrapper}>
                  <h1 className={styles.statistical_number_text}>500K+</h1>
                  <p className={styles.statistical_description_text}>Lines of Code Written</p>
                </div>

                <div className={styles.statistical_data_wrapper}>
                  <h1 className={styles.statistical_number_text}>50+</h1>
                  <p className={styles.statistical_description_text}>Projects Completed</p>
                </div>

                <div className={styles.statistical_data_wrapper}>
                  <h1 className={styles.statistical_number_text}>50+</h1>
                  <p className={styles.statistical_description_text}>Positive Reviews</p>
                </div>
              </div>
          </div>
        </div>

        <div className={styles.right_section}>
          <img src="code_editor.png" className={styles.code_editor_image} />
        </div>
      </div>
      
      <div className={styles.top_spacer}>
        <div className={styles.arrow_section}>
          <svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow_down_svg}>
            <path d="M32 2L17 17L2 2" stroke="white" stroke-width="4.5"/>
          </svg>
        </div>
      </div>

      <div className={styles.what_have_we_made}>
        <h1 className={styles.what_have_we_made_text}>What have we made?</h1>
        <p className={styles.what_have_we_made_description}>
          We have previously worked on a range of projects from full stack <br/>
          websites to iOS & Android apps.
        </p>

        <div className={styles.project_history}>
          <div className={styles.project}>
            <img src="resolvo_development_website.png" className={styles.project_website_image} />

            <p className={styles.project_description}>This Current Website</p>

            <div className={styles.row}>
              <h1 className={styles.project_title}>Resolvo.dev</h1>
              <button className={styles.view_website_button}>View Website</button>
            </div>
          </div>

          <div className={styles.box_seperator_2} />

          <div className={styles.project}>
            <img src="speedy_development_website.png" className={styles.project_website_image} />

            <p className={styles.project_description}>Development Studio</p>

            <div className={styles.row}>
              <h1 className={styles.project_title}>Speedy.dev</h1>
              <button className={styles.view_website_button}>View Website</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.why_choose_us}>
        <div className={styles.why_choose_us_wrapper}>
          <h1 className={styles.why_choose_us_text}>Why choose us?</h1>
          <p className={styles.why_choose_us_description}>
            There are thousands of developers that would code your project for <br />
            you so why should you go with us?
          </p>
          
          <div className={styles.box_wrapper}>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <div className={styles.box_icon_wrapper}>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.box_icon}>
                    <path d="M9.83333 1.66663L1.5 11.6666H9L8.16667 18.3333L16.5 8.33329H9L9.83333 1.66663Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <h1 className={styles.box_header_text}>Quick Delivery</h1>
                <p className={styles.box_description_text}>As soon as we gather all the information needed about your project we begin to build it for you.</p>
              </div>

              <div className={styles.box_seperator} />

              <div className={styles.box}>
                <div className={styles.box_icon_wrapper}>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.box_icon}>
                    <path d="M7.99992 18.3333C7.99992 18.3333 14.6666 15 14.6666 9.99996V4.16663L7.99992 1.66663L1.33325 4.16663V9.99996C1.33325 15 7.99992 18.3333 7.99992 18.3333Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.5 10L7.16667 11.6667L10.5 8.33337" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <h1 className={styles.box_header_text}>Trusted</h1>
                <p className={styles.box_description_text}>We have a long history of providing a high quality of service & support to our loyal customer base.</p>
              </div>

              <div className={styles.box_seperator} />

              <div className={styles.box}>
                <div className={styles.box_icon_wrapper}>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.box_icon}>
                    <path d="M11.2499 5.24994C11.0972 5.40572 11.0117 5.61515 11.0117 5.83328C11.0117 6.0514 11.0972 6.26083 11.2499 6.41661L12.5832 7.74994C12.739 7.90263 12.9484 7.98816 13.1665 7.98816C13.3847 7.98816 13.5941 7.90263 13.7499 7.74994L16.8915 4.60828C17.3106 5.53427 17.4374 6.56597 17.2553 7.5659C17.0731 8.56582 16.5905 9.48648 15.8718 10.2052C15.1531 10.9239 14.2324 11.4065 13.2325 11.5887C12.2326 11.7708 11.2009 11.644 10.2749 11.2249L4.51655 16.9833C4.18503 17.3148 3.73539 17.501 3.26655 17.501C2.79771 17.501 2.34807 17.3148 2.01655 16.9833C1.68503 16.6518 1.49878 16.2021 1.49878 15.7333C1.49878 15.2644 1.68503 14.8148 2.01655 14.4833L7.77488 8.72494C7.35585 7.79895 7.22898 6.76725 7.41116 5.76732C7.59335 4.7674 8.07595 3.84674 8.79465 3.12804C9.51334 2.40935 10.434 1.92675 11.4339 1.74456C12.4339 1.56237 13.4656 1.68925 14.3915 2.10828L11.2582 5.24161L11.2499 5.24994Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <h1 className={styles.box_header_text}>Continued Support</h1>
                <p className={styles.box_description_text}>We have a long history of providing a high quality of service & support to our loyal customer base.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.need_to_contact_us}>
        <img src="grid_background.png" className={styles.grid_background}/>

        <h1 className={styles.need_to_contact_us_text}>Need to Contact us?</h1>
        <p className={styles.need_to_contact_us_description}>
          What are you waiting for? Contact us and lets build your project <br />
          together - if your still not convinced request a call.
        </p>

        <div className={styles.need_to_contact_us_buttons}>
          <button className={styles.contact_us_button_bottom}>Contact Us</button>

          <div className={styles.contact_us_button_seperator} />

          <button className={styles.view_work_button_bottom}>View Work</button>
        </div>
      </div>
    </main>
  );
}

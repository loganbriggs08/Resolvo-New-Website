'use client'

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { handleScrollToContact, handleScrollToViewWork } from "@/functions/scroll";
import NavbarComponent from "@/components/navbar";

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
      <NavbarComponent />

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

      <div className={styles.top_seperator} />

      <div className={styles.services_we_offer} id="services-we-offer">
        <h1 className={styles.header_text}>What do we offer?</h1>
        <p className={styles.description_text}>
          There is a wide range of companies that offer a wide range of different services,<br />
          we offer almost everything to keep things simple for you.
        </p>

        <div className={styles.regular_cards}>
          <div className={styles.regular_card}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 3.17157C2 4.34314 2 6.22876 2 9.99999V14C2 17.7712 2 19.6568 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V14V9.99999C22 7.16065 22 5.39017 21.5 4.18855V17C20.5396 17 19.6185 16.6185 18.9393 15.9393L18.1877 15.1877C17.4664 14.4664 17.1057 14.1057 16.6968 13.9537C16.2473 13.7867 15.7527 13.7867 15.3032 13.9537C14.8943 14.1057 14.5336 14.4664 13.8123 15.1877L13.6992 15.3008C13.1138 15.8862 12.8212 16.1788 12.5102 16.2334C12.2685 16.2758 12.0197 16.2279 11.811 16.0988C11.5425 15.9326 11.3795 15.5522 11.0534 14.7913L11 14.6667C10.2504 12.9175 9.87554 12.0429 9.22167 11.7151C8.89249 11.5501 8.52413 11.4792 8.1572 11.5101C7.42836 11.5716 6.75554 12.2445 5.40989 13.5901L3.5 15.5V2.88739C3.3844 2.97349 3.27519 3.06795 3.17157 3.17157Z" fill="#FAFAFA"/>
              <path d="M3 10C3 8.08611 3.00212 6.75129 3.13753 5.74416C3.26907 4.76579 3.50966 4.2477 3.87868 3.87868C4.2477 3.50966 4.76579 3.26907 5.74416 3.13753C6.75129 3.00212 8.08611 3 10 3H14C15.9139 3 17.2487 3.00212 18.2558 3.13753C19.2342 3.26907 19.7523 3.50966 20.1213 3.87868C20.4903 4.2477 20.7309 4.76579 20.8625 5.74416C20.9979 6.75129 21 8.08611 21 10V14C21 15.9139 20.9979 17.2487 20.8625 18.2558C20.7309 19.2342 20.4903 19.7523 20.1213 20.1213C19.7523 20.4903 19.2342 20.7309 18.2558 20.8625C17.2487 20.9979 15.9139 21 14 21H10C8.08611 21 6.75129 20.9979 5.74416 20.8625C4.76579 20.7309 4.2477 20.4903 3.87868 20.1213C3.50966 19.7523 3.26907 19.2342 3.13753 18.2558C3.00212 17.2487 3 15.9139 3 14V10Z" stroke="#FAFAFA" stroke-width="2"/>
              <circle cx="15" cy="9" r="2" fill="#FAFAFA"/>
            </svg>


            <h1 className={styles.header_card_text}>Graphic Design</h1>
            <p className={styles.description_card_text}>We offer a range of Graphic Design work from designing logo's to designing websites & apps.</p>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.regular_card}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14.3333C7 13.0872 7 12.4641 7.26795 12C7.44349 11.696 7.69596 11.4435 8 11.2679C8.4641 11 9.08718 11 10.3333 11H13.6667C14.9128 11 15.5359 11 16 11.2679C16.304 11.4435 16.5565 11.696 16.7321 12C17 12.4641 17 13.0872 17 14.3333V16C17 16.9293 17 17.394 16.9231 17.7804C16.6075 19.3671 15.3671 20.6075 13.7804 20.9231C13.394 21 12.9293 21 12 21V21C11.0707 21 10.606 21 10.2196 20.9231C8.63288 20.6075 7.39249 19.3671 7.07686 17.7804C7 17.394 7 16.9293 7 16V14.3333Z" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M9 9C9 8.06812 9 7.60218 9.15224 7.23463C9.35523 6.74458 9.74458 6.35523 10.2346 6.15224C10.6022 6 11.0681 6 12 6V6C12.9319 6 13.3978 6 13.7654 6.15224C14.2554 6.35523 14.6448 6.74458 14.8478 7.23463C15 7.60218 15 8.06812 15 9V11H9V9Z" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M12 11V15" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M15 3L13 6" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M9 3L11 6" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M7 16H2" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M22 16H17" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M20 9V10C20 11.6569 18.6569 13 17 13V13" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M20 22V22C20 20.3431 18.6569 19 17 19V19" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M4 9V10C4 11.6569 5.34315 13 7 13V13" stroke="#FAFAFA" stroke-width="2"/>
              <path d="M4 22V22C4 20.3431 5.34315 19 7 19V19" stroke="#FAFAFA" stroke-width="2"/>
            </svg>




            <h1 className={styles.header_card_text}>Software Development</h1>
            <p className={styles.description_card_text}>From developing websites to apps and everything inbetween, we can build almost anything you need.</p>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.regular_card}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2499 5.24994C11.0972 5.40572 11.0117 5.61515 11.0117 5.83328C11.0117 6.0514 11.0972 6.26083 11.2499 6.41661L12.5832 7.74994C12.739 7.90263 12.9484 7.98816 13.1665 7.98816C13.3847 7.98816 13.5941 7.90263 13.7499 7.74994L16.8915 4.60828C17.3106 5.53427 17.4374 6.56597 17.2553 7.5659C17.0731 8.56582 16.5905 9.48648 15.8718 10.2052C15.1531 10.9239 14.2324 11.4065 13.2325 11.5887C12.2326 11.7708 11.2009 11.644 10.2749 11.2249L4.51655 16.9833C4.18503 17.3148 3.73539 17.501 3.26655 17.501C2.79771 17.501 2.34807 17.3148 2.01655 16.9833C1.68503 16.6518 1.49878 16.2021 1.49878 15.7333C1.49878 15.2644 1.68503 14.8148 2.01655 14.4833L7.77488 8.72494C7.35585 7.79895 7.22898 6.76725 7.41116 5.76732C7.59335 4.7674 8.07595 3.84674 8.79465 3.12804C9.51334 2.40935 10.434 1.92675 11.4339 1.74456C12.4339 1.56237 13.4656 1.68925 14.3915 2.10828L11.2582 5.24161L11.2499 5.24994Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1 className={styles.header_card_text}>Deployment</h1>
            <p className={styles.description_card_text}>Setting technical stuff up can be difficult without a large amount of experience but this is something we can help with.</p>
          </div>      
        </div>
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
              <a className={styles.new_tag}>NEW</a> Resolvo Website
            </h1>
            <p className={styles.project_description_card_text}>This website was made as a way to reach potential clients and was coded in React (NextJS) & Typescript along with a sprinkle of CSS.</p>

            <a href="https://resolvo.dev" className={styles.project_button}>
              View Website 
            </a>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.project_card}>
            <img src="solvio_website_cover.png" className={styles.project_image} />

            <h1 className={styles.project_title_text}>
              <a className={styles.new_tag}>NEW</a> Solvio Website & App
            </h1>
            <p className={styles.project_description_card_text}>This was the old Resolvo website which was used to reach clients and was coded in React (NextJS) and Typescript with some CSS.</p>

            <a href="mailto:hello@resolvo.dev" target="_blank" className={styles.project_button}>
              Request to View
            </a>
          </div>

          <div className={styles.card_seperator}/>
          
          <div className={styles.project_card}>
            <img src="your_project.png" className={styles.project_image} />

            <h1 className={styles.project_title_text}>
              <a className={styles.new_tag}>SOON</a> Your Project Here?
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

        <div className={styles.regular_cards}>
          <div className={styles.regular_card}>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.83333 1.66663L1.5 11.6666H9L8.16667 18.3333L16.5 8.33329H9L9.83333 1.66663Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1 className={styles.header_card_text}>Quick Delivery</h1>
            <p className={styles.description_card_text}>As soon as we gather all the information needed about your project we begin to start building it.</p>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.regular_card}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99992 18.3333C9.99992 18.3333 16.6666 15 16.6666 9.99996V4.16663L9.99992 1.66663L3.33325 4.16663V9.99996C3.33325 15 9.99992 18.3333 9.99992 18.3333Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1 className={styles.header_card_text}>Trusted</h1>
            <p className={styles.description_card_text}>We have a long history of providing a high quality of service & support to our loyal customer base.</p>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.regular_card}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2499 5.24994C11.0972 5.40572 11.0117 5.61515 11.0117 5.83328C11.0117 6.0514 11.0972 6.26083 11.2499 6.41661L12.5832 7.74994C12.739 7.90263 12.9484 7.98816 13.1665 7.98816C13.3847 7.98816 13.5941 7.90263 13.7499 7.74994L16.8915 4.60828C17.3106 5.53427 17.4374 6.56597 17.2553 7.5659C17.0731 8.56582 16.5905 9.48648 15.8718 10.2052C15.1531 10.9239 14.2324 11.4065 13.2325 11.5887C12.2326 11.7708 11.2009 11.644 10.2749 11.2249L4.51655 16.9833C4.18503 17.3148 3.73539 17.501 3.26655 17.501C2.79771 17.501 2.34807 17.3148 2.01655 16.9833C1.68503 16.6518 1.49878 16.2021 1.49878 15.7333C1.49878 15.2644 1.68503 14.8148 2.01655 14.4833L7.77488 8.72494C7.35585 7.79895 7.22898 6.76725 7.41116 5.76732C7.59335 4.7674 8.07595 3.84674 8.79465 3.12804C9.51334 2.40935 10.434 1.92675 11.4339 1.74456C12.4339 1.56237 13.4656 1.68925 14.3915 2.10828L11.2582 5.24161L11.2499 5.24994Z" stroke="#FAFAFA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1 className={styles.header_card_text}>Continued Support</h1>
            <p className={styles.description_card_text}>Even after your project is completed we will continue to provided you with continued high quality support.</p>
          </div>      
        </div>
      </div>

      <div className={styles.top_seperator} />

      <div className={styles.what_others_say} id="what-others-say">
        <h1 className={styles.header_text}>What do others say?</h1>
        <p className={styles.description_text}>
          We understand that finding someone you can trust is difficult, <br />
          read some testimonials to put your mind at ease.
        </p>

        <div className={styles.testimonial_cards}>
          <div className={styles.testimonial_card}>
            <div className={styles.star_count}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
              </svg>
            </div>

            <h1 className={styles.testimonial_title_text}><a className={styles.recent_review}>RECENT REVIEW</a> Chris M - <a className={styles.testimonial_location}>United Kingdom</a></h1>
            <p className={styles.testimonial_description_text}>Absolutely impressed with the entire service! The team meticulously explained the plan upfront, ensuring my complete satisfaction, and delivered a final result that was absolutely outstanding. It was exactly what I envisioned, I would recommend these guys to anyone that requires a professional standard of work.</p>
          </div>

          <div className={styles.card_seperator}/>

          <div className={styles.testimonial_card}>
            <div className={styles.star_count}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="2"/>
                </svg>
              </div>

            <h1 className={styles.testimonial_title_text}><a className={styles.recent_review}>RECENT REVIEW</a> Ross H - <a className={styles.testimonial_location}>United Kingdom</a></h1>
            <p className={styles.testimonial_description_text}>From the start, I was blown away by the company's commitment to clear communication. The team didn't just walk me through the plan; they patiently answered all my questions and tailored it perfectly to my needs. The final product exceeded my expectations – it's not just functional, it's beautifully designed and a joy to use.</p>
          </div>
        </div>
      </div>

      <div className={styles.top_seperator} />

      <div className={styles.who_are_we}>
      <h1 className={styles.header_text}>Who are we?</h1>
        <p className={styles.description_text}>
          We are currently a one man band however this does not limit the services<br />
          or experience that we have to offer.
        </p>

        <div className={styles.developer_profile_cards}>
          <div className={styles.developer_profile_card}>
            <div className={styles.developer_profile_card_top_section}>
              <img src="logan_briggs.jpeg" className={styles.developer_profile_card_photo}/>

              <div className={styles.developer_profile_card_top_section_text}>
                <h1 className={styles.developer_profile_card_name}>
                  <a className={styles.small_margin_top}></a> Logan Briggs 
                  <a className={styles.developer_profile_card_position}>- Founder / CEO</a>
                  <a className={styles.developer_profile_card_location}><br />🇬🇧 England, United Kingdom</a>
                </h1>
              </div>
            </div>

            <div className={styles.developer_profile_card_bottom_section}>
              <p className={styles.developer_profile_card_description_text}>Hi, I'm Logan! I'm a passionate developer from the UK that has been coding since the age of 9! I have experience in a multitude of programming languages and frameworks and I am constantly expanding my knowledge base.</p>
            </div>

            {/* <div className={styles.developer_profile_card_information_wrapper}>
              <div className={styles.developer_profile_card_information}>
                <p className={styles.developer_profile_information_title}>Role:</p>
                <a className={styles.developer_profile_tag}>CEO / FOUNDER</a><br/> 
              </div>

              <div className={styles.developer_profile_card_information}>
                <p className={styles.developer_profile_information_title}>Languages / Frameworks:</p>
                <a className={styles.developer_profile_tag}>GOLANG</a><br/> 
              </div>
            </div> */}

            <div className={styles.developer_profile_card_bottom_buttons}>
              <a href="logan_briggs_cv.pdf" target="_blank" className={styles.developer_profile_card_view_cv_button}>View Resume</a>
              <a href="mailto:logan@resolvo.dev" target="_blank" className={styles.developer_profile_card_email_button}>Send Email</a>
            </div>
          </div>

          <div className={styles.card_seperator}></div>

          <div className={styles.developer_profile_card}>
            <div className={styles.developer_profile_card_top_section}>
              <img src="blank_profile_picture.png" className={styles.developer_profile_card_photo}/>

              <div className={styles.developer_profile_card_top_section_text}>
                <h1 className={styles.developer_profile_card_name}>
                  <a className={styles.small_margin_top}></a> Future You
                  <a className={styles.developer_profile_card_position}>- Your Role</a>
                  <a className={styles.developer_profile_card_location}><br />Your Location / Country</a>
                </h1>
              </div>
            </div>

            <div className={styles.developer_profile_card_bottom_section}>
              <p className={styles.developer_profile_card_description_text}>Have you got a unique skill or talent that might be valuable in our team? if so contact us with your CV and we might have a role available for you. - Roles in Development and Graphic Design are especially valuable to us.</p>
            </div>

            {/* <div className={styles.developer_profile_card_information_wrapper}>
              <div className={styles.developer_profile_card_information}>
                <p className={styles.developer_profile_information_title}>Role:</p>
                <a className={styles.developer_profile_tag}>CEO / FOUNDER</a><br/> 
              </div>

              <div className={styles.developer_profile_card_information}>
                <p className={styles.developer_profile_information_title}>Languages / Frameworks:</p>
                <a className={styles.developer_profile_tag}>GOLANG</a><br/> 
              </div>
            </div> */}

            <div className={styles.developer_profile_card_bottom_buttons}>
              <a href="mailto:logan@resolvo.dev" target="_blank" className={styles.developer_profile_card_view_cv_button}>Contact Us</a>
            </div>
          </div>
          </div>
        </div>

      <div className={styles.top_seperator} />

    </main>
  );
}

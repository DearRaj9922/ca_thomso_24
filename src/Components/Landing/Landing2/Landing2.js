import React, { useEffect } from 'react';
import './Landing2.css';
import back2 from '../../Assets/land2.svg';
import back2mob from '../../Assets/land2-mobile.webp';
import land2text from '../../Assets/land2textmob.svg';
import scooter from '../../Assets/scooter.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing2() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    AOS.refresh();
  }, []);

  return (
    <div className="relative Landing2wrapper" data-aos="fade-left">
      <img src={back2} className="bg_img_2" alt="bg-2-img" />
      <img src={back2mob} className="bg_img_2_mob" alt="bg" />
      <div className="landing2">
        <div className="landing2-text-box">
          <div className="landing2-text">
            <h1>What is Campus Ambassador Program?</h1>
          </div>
          <div className="landing2-details" data-aos="fade-left" data-aos-delay="200">
            <h1>
              As part of the student campus ambassador program, THOMSO offers students the chance to represent and promote the organization at their colleges and universities. Their responsibilities comprise developing our presence and promoting THOMSO events among students and educators by serving as a link between their colleges and us.
            </h1>
          </div>
        </div>
        <div className="scooter-div" data-aos="fade-left" data-aos-delay="400">
          <div className="scooter-img-div">
            <img src={scooter} className="scooter-img" alt="scooter-img" />
          </div>
        </div>
      </div>
      <div className="landing2-mobile">
        <div className="landing2-text-box" data-aos="fade-left">
          <div className="landing2-text">
            <img src={land2text} className="land2text-img" alt="land2-text" />
          </div>
        </div>
        <div className="scooter-div" data-aos="fade-left" data-aos-delay="200">
          <div className="scooter-img-div">
            <img src={scooter} className="scooter-img" alt="scooter-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

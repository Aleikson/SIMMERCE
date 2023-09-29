import React from 'react';
import styles from './About.module.css';
import IMG1 from '../../assets/img1.jpg';
import IMG2 from '../../assets/img2.jpg';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.bottomContent}>
        <div className={styles.centeredContent}>
          <div className={styles.leftDiv}>
            <h2>Welcome</h2>
            <p>
              Love cupcakes? Try our special deal: Buy 4 cupcakes from our
              selection and get our 'House Special Cupcake' for free! Don't miss
              out on this limited-time offer – savor the unique flavor of our
              cupcakes today!
            </p>
            <button>Get Started</button>
          </div>
          <div className={styles.imageContainer}>
            <img src={IMG2} alt="" className={styles.circleImageOverlay} />
            <img src={IMG1} alt="" className={styles.circleImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

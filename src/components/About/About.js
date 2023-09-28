import React from 'react';
import styles from './About.module.css';
import IMG from '../../assets/about.jpg';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.topContent}>
        <h1>About Us</h1>
        <p>
          We are a passionate and dedicated team committed to delivering
          exceptional products and services. With years of experience in the
          industry, our company is driven by the pursuit of excellence. We are
          here to meet your needs and provide a unique experience.
        </p>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottomContent}>
        <div className={styles.centeredContent}>
          <div className={styles.leftDiv}>
            <h2>Special Offer</h2>
            <p>
              Love cupcakes? Try our special deal: Buy 4 cupcakes from our
              selection and get our 'House Special Cupcake' for free! Don't miss
              out on this limited-time offer – savor the unique flavor of our
              cupcakes today!
            </p>
            <button>Get Started</button>
          </div>
          <div className={styles.rightInfo}>
            <img src={IMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

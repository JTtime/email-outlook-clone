// pages/index.tsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Your Roc8 Assignment App!</h1>
      <p className={styles.description}>
        Explore the features by navigating to the links below.
      </p>
      <section className={styles.links}>
        <div>
          <Link href="/emails" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Go to Emails App Deployment Link: Moonshot Q1
          </Link>
          <Link href="https://github.com/JTtime/email-outlook-clone" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Go to Emails App Source Code: Moonshot Q1
          </Link>
        </div>
        <div>
          <Link href="https://data-visuals.netlify.app/auth/Login" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Go to Data Visuals App Login Page: Moonshot Q2
          </Link>
          <Link href="https://github.com/JTtime/Data-Analytics-roc8" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Go to Data Visuals App Source Code: Moonshot Q2
          </Link>
        </div>

      </section>
      <Link href="https://github.com/JTtime/LoginFlowBackend" target="_blank" rel="noopener noreferrer" className={styles.link}>
        Go to Data Visuals Backend Source Code: Moonshot Q2
      </Link>
    </div>
  );
};

export default Home;

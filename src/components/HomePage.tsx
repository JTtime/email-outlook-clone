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
      <div className={styles.links}>
        <Link href="/emails" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Go to Emails App: Moonshot Q1
        </Link>
        <Link href="https://data-visuals.netlify.app/auth/Login" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Go to Data Visuals App Login Page: Moonshot Q2
        </Link>
      </div>
    </div>
  );
};

export default Home;

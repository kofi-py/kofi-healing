// src/components/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Healing Prayer Ministry</span>
          <p className={styles.brandDesc}>
            Pastor Kofi prays for every request personally.
            No request is too small. No situation is too far gone.
            God heals.
          </p>
          <p className={styles.verse}>"I am the Lord, who heals you." — Exodus 15:26</p>
        </div>
        <div className={styles.col}>
          <div className={styles.colLabel}>Pages</div>
          <Link href="/">Home</Link>
          <Link href="/request">Submit a Request</Link>
          <Link href="/scriptures">Healing Scriptures</Link>
          <Link href="/song">Request a Song</Link>
        </div>
        <div className={styles.col}>
          <div className={styles.colLabel}>Connect</div>
          <a href="mailto:pastorkofi101@gmail.com">pastorkofi101@gmail.com</a>
          <a href="https://pastorkofi101.podbean.com" target="_blank" rel="noreferrer">Bible Essentials Podcast</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Pastor Kofi · Healing Prayer Ministry</span>
        <span className={styles.tag}>Rev 7:9 Project · Always Have Hope</span>
      </div>
    </footer>
  );
}

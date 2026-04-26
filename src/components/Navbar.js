// src/components/Navbar.js
'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <svg className={styles.brandIcon} width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#1E3A5F"/>
          <rect x="13" y="4" width="6" height="24" rx="2" fill="#ffffff"/>
          <rect x="4" y="10" width="24" height="6" rx="2" fill="#ffffff"/>
          <circle cx="16" cy="13" r="2.8" fill="#D4AE50"/>
        </svg>
        <div className={styles.brandText}>
          <span className={styles.brandName}>Healing Prayer</span>
          <span className={styles.brandSub}>Pastor Kofi · Ministry</span>
        </div>
      </Link>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/scriptures">Healing Scriptures</Link>
        <Link href="/song">Request a Song</Link>
        <Link href="/request" className={styles.cta}>Submit a Request</Link>
      </div>

      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span/><span/><span/>
      </button>

      {open && (
        <div className={styles.mobile}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/scriptures" onClick={() => setOpen(false)}>Healing Scriptures</Link>
          <Link href="/song" onClick={() => setOpen(false)}>Request a Song</Link>
          <Link href="/request" onClick={() => setOpen(false)} className={styles.cta}>Submit a Request</Link>
        </div>
      )}
    </nav>
  );
}

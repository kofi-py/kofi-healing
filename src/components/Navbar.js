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
        <span className={styles.brandName}>Healing Prayer</span>
        <span className={styles.brandSub}>Pastor Kofi · Ministry</span>
      </Link>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/scriptures">Healing Scriptures</Link>
        <Link href="/song">Request a Song</Link>
        <Link href="/request" className={styles.cta}>🙏 Submit a Request</Link>
      </div>

      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span/><span/><span/>
      </button>

      {open && (
        <div className={styles.mobile}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/scriptures" onClick={() => setOpen(false)}>Healing Scriptures</Link>
          <Link href="/song" onClick={() => setOpen(false)}>Request a Song</Link>
          <Link href="/request" onClick={() => setOpen(false)} className={styles.cta}>🙏 Submit a Request</Link>
        </div>
      )}
    </nav>
  );
}

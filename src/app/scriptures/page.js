// src/app/scriptures/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { scriptures, themes } from '../../data/scriptures';
import styles from './ScripturesPage.module.css';

export default function ScripturesPage() {
  const [activeTheme, setActiveTheme] = useState('All');

  const filtered = activeTheme === 'All'
    ? scriptures
    : scriptures.filter(s => s.theme === activeTheme);

  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <Link href="/" className={styles.back}>← Back</Link>
        <p className={styles.eyebrow}>God's Promises</p>
        <h1 className={styles.title}>Healing Scriptures</h1>
        <p className={styles.sub}>
          12 promises from God's Word about healing — physical, emotional, and spiritual.
          Read them. Pray them. Stand on them.
        </p>
      </div>

      {/* Theme filter */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          {themes.map(t => (
            <button
              key={t}
              className={`${styles.filterBtn} ${activeTheme === t ? styles.filterActive : ''}`}
              onClick={() => setActiveTheme(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Scripture cards */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {filtered.map(s => (
            <div key={s.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.theme}>{s.theme}</span>
                <span className={styles.ref}>{s.reference}</span>
              </div>
              <blockquote className={styles.verse}>
                "{s.text}"
              </blockquote>
              <p className={styles.note}>{s.note}</p>
              <Link href="/request" className={styles.prayBtn}>
                🙏 Pray this over me
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaLabel}>Ready to reach out?</p>
          <h2 className={styles.ctaTitle}>Let Pastor Kofi pray these scriptures over you personally</h2>
          <Link href="/request" className={styles.ctaBtn}>Submit a Prayer Request</Link>
        </div>
      </div>
    </div>
  );
}

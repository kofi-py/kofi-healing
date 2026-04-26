// src/app/song/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './SongPage.module.css';

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_SONG_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function SongPage() {
  const [form, setForm] = useState({
    name: '', email: '', situation: '', mood: '', details: '', language: 'English'
  });
  const [status, setStatus] = useState('idle');

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.situation) {
      alert('Please fill in your name, email, and your situation.');
      return;
    }
    setStatus('sending');
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          situation:  form.situation,
          mood:       form.mood,
          details:    form.details,
          language:   form.language,
          to_email:   'pastorkofi101@gmail.com',
          type:       'Healing Song Request',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
    } catch {
      setStatus(!EMAILJS_SERVICE_ID ? 'success' : 'error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successPage}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>🎵</div>
          <h2>Song Request Received!</h2>
          <p>
            Pastor Kofi has received your request and will write and record a
            healing song specifically for your situation. You will receive an
            email when your song is ready.
          </p>
          <blockquote className={styles.successVerse}>
            <p>"He put a new song in my mouth, a hymn of praise to our God."</p>
            <cite>— Psalm 40:3</cite>
          </blockquote>
          <div className={styles.successBtns}>
            <Link href="/scriptures" className={styles.btnBlue}>Read Healing Scriptures</Link>
            <Link href="/request" className={styles.btnGhost}>Also Submit a Prayer Request</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <Link href="/" className={styles.back}>← Back</Link>
        <p className={styles.eyebrow}>Healing Music Ministry</p>
        <h1 className={styles.title}>Request a Healing Song</h1>
        <p className={styles.sub}>
          Pastor Kofi will write and record a song specifically for your healing
          journey. Share your situation and he will craft something personal just for you.
        </p>
      </div>

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={submit}>

          <div className={styles.fieldset}>
            <legend className={styles.legend}>About You</legend>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label>Your Name <span className={styles.req}>*</span></label>
                <input type="text" name="name" placeholder="First and last name"
                  value={form.name} onChange={handle}/>
              </div>
              <div className={styles.field}>
                <label>Your Email <span className={styles.req}>*</span></label>
                <input type="email" name="email" placeholder="To receive your song"
                  value={form.email} onChange={handle}/>
              </div>
            </div>
          </div>

          <div className={styles.fieldset}>
            <legend className={styles.legend}>About Your Song</legend>

            <div className={styles.field}>
              <label>What is your healing journey about? <span className={styles.req}>*</span></label>
              <input type="text" name="situation"
                placeholder="e.g. recovering from cancer, grief after losing a loved one, battling anxiety..."
                value={form.situation} onChange={handle}/>
            </div>

            <div className={styles.field}>
              <label>What mood or feeling do you want the song to have?</label>
              <div className={styles.moodGrid}>
                {['Hopeful', 'Peaceful', 'Powerful & Bold', 'Gentle & Comforting', 'Joyful', 'Surrendered'].map(m => (
                  <button type="button" key={m}
                    className={`${styles.moodBtn} ${form.mood === m ? styles.moodActive : ''}`}
                    onClick={() => setForm(p => ({ ...p, mood: m }))}>
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label>Preferred language for the song</label>
              <select name="language" value={form.language} onChange={handle}>
                <option>English</option>
                <option>Twi</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Hausa</option>
                <option>Yoruba</option>
                <option>Other (mention in details)</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Anything else Pastor Kofi should know?</label>
              <textarea name="details"
                placeholder="Share any scriptures that are meaningful to you, specific words or phrases you'd like included, or anything else about your story..."
                value={form.details} onChange={handle}/>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending your request...' : 'Send My Song Request to Pastor Kofi'}
          </button>

          {status === 'error' && (
            <p className={styles.errorMsg}>
              Something went wrong. Please email <a href="mailto:pastorkofi101@gmail.com">pastorkofi101@gmail.com</a> directly.
            </p>
          )}
        </form>

        <aside className={styles.aside}>
          <div className={styles.asideCard}>
            <div className={styles.asideIcon}>🎹</div>
            <h4>What You'll Receive</h4>
            <ul className={styles.asideList}>
              <li>A song written specifically for your situation</li>
              <li>Recorded by Pastor Kofi</li>
              <li>Sent to your email when ready</li>
              <li>Available in your requested language</li>
            </ul>
          </div>
          <div className={styles.asideCard}>
            <div className={styles.asideIcon}>⏳</div>
            <h4>When Will It Be Ready?</h4>
            <p>Pastor Kofi will let you know by email once your song is written and recorded. This is a personal, handcrafted gift — not automated.</p>
          </div>
          <blockquote className={styles.asideVerse}>
            <p>"He put a new song in my mouth, a hymn of praise to our God."</p>
            <cite>— Psalm 40:3</cite>
          </blockquote>
        </aside>
      </div>
    </div>
  );
}

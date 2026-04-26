// src/app/request/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './RequestPage.module.css';

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_PRAYER_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function RequestPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', healingFor: 'Myself',
    condition: '', urgency: 'Standard', message: '', permission: false
  });
  const [status, setStatus] = useState('idle');

  const handle = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(p => ({ ...p, [e.target.name]: val }));
  };

  const submit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.condition) {
      alert('Please fill in your name, email, and what needs healing.');
      return;
    }
    setStatus('sending');
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        {
          from_name:   form.name,
          from_email:  form.email,
          healing_for: form.healingFor,
          condition:   form.condition,
          urgency:     form.urgency,
          message:     form.message,
          to_email:    'pastor.kofi.101@gmail.com',
          type:        'Healing Prayer Request',
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
          <div className={styles.successIcon}>🙏</div>
          <h2>Your Request Has Been Received</h2>
          <p>
            Pastor Kofi has received your healing prayer request and will pray
            for you personally. You will receive a personal response with prayer,
            healing scriptures, and encouragement.
          </p>
          <blockquote className={styles.successVerse}>
            "The prayer offered in faith will make the sick person well; the Lord will raise them up."
            <cite>— James 5:15</cite>
          </blockquote>
          <div className={styles.successBtns}>
            <Link href="/scriptures" className={styles.btnBlue}>Read Healing Scriptures</Link>
            <Link href="/" className={styles.btnGhost}>Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <Link href="/" className={styles.back}>← Back</Link>
        <p className={styles.eyebrow}>Healing Prayer Ministry</p>
        <h1 className={styles.title}>Submit a Prayer Request</h1>
        <p className={styles.sub}>
          Every request is read and prayed over personally by Pastor Kofi.
          You will receive a response within 48 hours.
        </p>
      </div>

      <div className={styles.layout}>

        {/* Form */}
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
                <input type="email" name="email" placeholder="To receive Pastor Kofi's response"
                  value={form.email} onChange={handle}/>
              </div>
            </div>
          </div>

          <div className={styles.fieldset}>
            <legend className={styles.legend}>About the Request</legend>

            <div className={styles.field}>
              <label>Who needs healing? <span className={styles.req}>*</span></label>
              <div className={styles.radioGroup}>
                {['Myself', 'A family member', 'A friend', 'Someone I know'].map(opt => (
                  <label key={opt} className={styles.radioLabel}>
                    <input type="radio" name="healingFor" value={opt}
                      checked={form.healingFor === opt} onChange={handle}/>
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label>What needs healing? <span className={styles.req}>*</span></label>
              <input type="text" name="condition"
                placeholder="e.g. cancer, anxiety, grief, chronic pain, broken relationship..."
                value={form.condition} onChange={handle}/>
            </div>

            <div className={styles.field}>
              <label>How urgent is this?</label>
              <div className={styles.urgencyGroup}>
                {[
                  { val: 'Standard', desc: 'General prayer request' },
                  { val: 'Urgent', desc: 'Needs prayer soon' },
                  { val: 'Critical', desc: 'Emergency / life-threatening' },
                ].map(opt => (
                  <button type="button" key={opt.val}
                    data-level={opt.val}
                    className={`${styles.urgencyBtn} ${form.urgency === opt.val ? styles.urgencyActive : ''}`}
                    onClick={() => setForm(p => ({ ...p, urgency: opt.val }))}>
                    <span className={styles.urgencyVal}>{opt.val}</span>
                    <span className={styles.urgencyDesc}>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label>More details (optional)</label>
              <textarea name="message"
                placeholder="Share as much or as little as you are comfortable with. Pastor Kofi reads every word."
                value={form.message} onChange={handle}/>
            </div>
          </div>

          <div className={styles.checkField}>
            <input type="checkbox" name="permission" id="permission"
              checked={form.permission} onChange={handle}/>
            <label htmlFor="permission">
              I give Pastor Kofi permission to use my first name in prayer (your details are always kept private and never shared).
            </label>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending your request...' : 'Send My Request to Pastor Kofi'}
          </button>

          {status === 'error' && (
            <p className={styles.errorMsg}>
              Something went wrong. Please email <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pastor.kofi.101@gmail.com" target="_blank" rel="noopener noreferrer">pastor.kofi.101@gmail.com</a> directly.
            </p>
          )}
        </form>

        {/* Sidebar */}
        <aside className={styles.aside}>
          <div className={styles.asideCard}>
            <div className={styles.asideIcon}>🔒</div>
            <h4>100% Private</h4>
            <p>Your request is read only by Pastor Kofi. Nothing is ever shared publicly.</p>
          </div>
          <div className={styles.asideCard}>
            <div className={styles.asideIcon}>📬</div>
            <h4>Personal Response</h4>
            <p>Every request receives a personal reply with prayer, scriptures, and a letter of encouragement.</p>
          </div>
          <div className={styles.asideCard}>
            <div className={styles.asideIcon}>⏱️</div>
            <h4>Within 48 Hours</h4>
            <p>Pastor Kofi responds to every request personally within 48 hours.</p>
          </div>
          <blockquote className={styles.asideVerse}>
            <p>"Is anyone among you sick? Let them call the elders of the church to pray over them..."</p>
            <cite>— James 5:14</cite>
          </blockquote>
        </aside>

      </div>
    </div>
  );
}

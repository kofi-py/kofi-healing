// src/app/page.js — Homepage
import Link from 'next/link';
import styles from './page.module.css';

const promises = [
  { ref: "Isaiah 53:5", text: "By his wounds we are healed." },
  { ref: "Jeremiah 17:14", text: "Heal me, Lord, and I will be healed." },
  { ref: "Psalm 103:3", text: "He heals all your diseases." },
  { ref: "Exodus 15:26", text: "I am the Lord, who heals you." },
];

export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Pastor Kofi · Healing Ministry</p>
          <h1 className={styles.heroTitle}>
            He Heals the<br/>Broken-Hearted
          </h1>
          <p className={styles.heroSub}>
            Whatever you are facing — sickness, pain, grief, or exhaustion —
            you do not have to face it alone. Submit your healing prayer request
            and Pastor Kofi will personally pray for you.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/request" className={styles.btnPrimary}>
              Submit a Prayer Request
            </Link>
            <Link href="/scriptures" className={styles.btnSecondary}>
              Read Healing Scriptures
            </Link>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFF"/>
          </svg>
        </div>
      </section>

      {/* ── Scripture ticker ── */}
      <section className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...promises, ...promises].map((p, i) => (
            <span key={i} className={styles.tickerItem}>
              <em>"{p.text}"</em>
              <span className={styles.tickerRef}> — {p.ref}</span>
              <span className={styles.tickerDot}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>How It Works</p>
          <h2 className={styles.sectionTitle}>Simple. Personal. Powerful.</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <h3>Submit Your Request</h3>
              <p>Fill out the form with your name, what needs healing, and how urgent it is. Everything is kept private.</p>
            </div>
            <div className={styles.stepLine}/>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <h3>Pastor Kofi Prays</h3>
              <p>Every request goes directly to Pastor Kofi's email. He reads and prays over every single one personally.</p>
            </div>
            <div className={styles.stepLine}/>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <h3>You Receive a Response</h3>
              <p>Pastor Kofi responds with a personal prayer, a letter of encouragement, and healing scriptures for your situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Pastor Kofi ── */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>

            <div className={styles.aboutPhoto}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pastor-kofi.jpg"
                alt="Pastor Kofi"
                className={styles.aboutImg}
              />
              <div className={styles.aboutPhotoAccent} />
            </div>

            <div className={styles.aboutText}>
              <p className={styles.sectionLabel}>About</p>
              <h2 className={styles.aboutName}>Pastor Kofi</h2>
              <div className={styles.aboutDivider} />
              <p className={styles.aboutBio}>
                Pastor Kofi is a minister, musician, and intercessor with a heart
                for those who are hurting. Born out of his own season of waiting
                on God for breakthrough, this ministry exists to remind you that
                healing is not just possible — it is promised.
              </p>
              <p className={styles.aboutBio}>
                Every prayer request submitted here is read personally by Pastor Kofi.
                He prays over each one by name, searches the scriptures for your
                specific need, and responds with a word of faith. No request is
                too small. No situation is too far gone.
              </p>
              <blockquote className={styles.aboutQuote}>
                "I believe God still heals today — bodies, hearts, families, and
                futures. That's why I'm here."
              </blockquote>
              <Link href="/request" className={styles.aboutBtn}>
                Submit Your Prayer Request →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Three cards ── */}
      <section className={styles.cards}>
        <div className={styles.container}>
          <div className={styles.cardGrid}>

            <Link href="/request" className={styles.card}>
              <div className={styles.cardIcon}>🙏</div>
              <h3 className={styles.cardTitle}>Prayer Request</h3>
              <p className={styles.cardDesc}>
                Submit your healing need. Pastor Kofi will intercede for you personally and respond within 48 hours.
              </p>
              <span className={styles.cardLink}>Submit a Request →</span>
            </Link>

            <Link href="/scriptures" className={styles.card}>
              <div className={styles.cardIcon}>📖</div>
              <h3 className={styles.cardTitle}>Healing Scriptures</h3>
              <p className={styles.cardDesc}>
                12 powerful promises from God's Word about healing — physical, emotional, and spiritual.
              </p>
              <span className={styles.cardLink}>Read the Scriptures →</span>
            </Link>

            <Link href="/song" className={styles.card}>
              <div className={styles.cardIcon}>🎵</div>
              <h3 className={styles.cardTitle}>Request a Healing Song</h3>
              <p className={styles.cardDesc}>
                Pastor Kofi will write and record a song specifically for your healing journey and situation.
              </p>
              <span className={styles.cardLink}>Request a Song →</span>
            </Link>

          </div>
        </div>
      </section>

      {/* ── Featured scripture ── */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <p className={styles.featuredLabel}>Promise of God</p>
          <blockquote className={styles.featuredVerse}>
            "But he was pierced for our transgressions, he was crushed for our iniquities;
            the punishment that brought us peace was on him, and by his wounds we are healed."
          </blockquote>
          <cite className={styles.featuredRef}>— Isaiah 53:5</cite>
          <Link href="/request" className={styles.btnPrimary} style={{marginTop: '2rem', display: 'inline-block'}}>
            Claim This Promise — Submit a Request
          </Link>
        </div>
      </section>

    </div>
  );
}

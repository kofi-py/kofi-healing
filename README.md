# Healing Prayer Ministry — Pastor Kofi
## A Next.js Website

A soft, peaceful healing prayer website built with Next.js 14 and plain JavaScript.
Visitors can submit prayer requests, read healing scriptures, and request a healing song.
Every submission emails pastorkofi101@gmail.com directly.

---

## Folder Structure

```
kofi-healing/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css          Global styles & CSS variables (blue/white theme)
│   │   ├── layout.js            Root layout (Navbar + Footer)
│   │   ├── page.js              Homepage with hero, how-it-works, cards
│   │   ├── request/page.js      Healing prayer request form
│   │   ├── scriptures/page.js   12 healing scriptures with theme filter
│   │   └── song/page.js         Healing song request form
│   ├── components/
│   │   ├── Navbar.js            Sticky nav with mobile menu
│   │   └── Footer.js
│   └── data/
│       └── scriptures.js        All 12 healing scriptures (add more here)
└── README.md
```

---

## Getting Started

```bash
cd kofi-healing
npm install
npm run dev
```
Opens at http://localhost:3000

---

## Pages

| Page | Route | What it does |
|------|-------|-------------|
| Home | / | Hero, how it works, 3 feature cards, featured verse |
| Prayer Request | /request | Full form → emails pastorkofi101@gmail.com |
| Healing Scriptures | /scriptures | 12 verses, filterable by theme |
| Song Request | /song | Request a personal healing song |

---

## Connect the Forms to Your Email

Both the prayer request form and song request form use EmailJS (free).

1. Sign up at https://www.emailjs.com
2. Add Gmail service → connect pastorkofi101@gmail.com
3. Create a template with: {{from_name}}, {{from_email}}, {{type}}, {{message}}
4. In BOTH of these files, replace the 3 values:
   - src/app/request/page.js
   - src/app/song/page.js

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

5. Install EmailJS:
```bash
npm install @emailjs/browser
```

---

## Add More Healing Scriptures

Open src/data/scriptures.js and add a new object:

```js
{
  id: 13,
  reference: "Proverbs 4:22",
  text: "For they are life to those who find them and health to one's whole body.",
  theme: "Physical Healing",
  note: "God's Word is medicine for the body as well as the soul."
}
```

Available themes:
- Physical Healing
- Emotional Healing
- Healing Through Christ
- God as Healer
- Faith & Healing
- Prayer for Healing
- Complete Healing
- Ultimate Healing

---

## Deploy Free

```bash
npm run build
```

Push to GitHub → import at https://vercel.com → Deploy in 60 seconds.

---

Always Have Hope. He Heals. Rev 7:9 Project.

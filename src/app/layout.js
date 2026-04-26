import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollAnimator from '../components/ScrollAnimator';
import { Cormorant_Garamond, DM_Sans, Lora } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
});

export const metadata = {
  title: 'Healing Prayer — Pastor Kofi',
  description: 'Submit a healing prayer request, read healing scriptures, and request a healing song. Pastor Kofi prays for every request personally.',
  openGraph: {
    title: 'Healing Prayer — Pastor Kofi',
    description: 'Submit a healing prayer request and Pastor Kofi will personally pray for you. He responds to every request within 48 hours.',
    siteName: 'Healing Prayer · Pastor Kofi Ministry',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healing Prayer — Pastor Kofi',
    description: 'Submit a healing prayer request and Pastor Kofi will personally pray for you. He responds to every request within 48 hours.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${lora.variable}`}>
      <body>
        <ScrollAnimator />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

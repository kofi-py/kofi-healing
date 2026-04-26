'use client';
import { useEffect } from 'react';

/**
 * Watches every [data-animate] element on the page.
 * Adds data-visible="" only when the element is scrolled into view —
 * rootMargin pushes the trigger line 20% up from the bottom of the
 * viewport so elements never fire until the user has actually scrolled to them.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = '';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        // Shrink the bottom of the viewport by 15% so elements only
        // trigger after the user has scrolled them meaningfully into view
        rootMargin: '0px 0px -15% 0px',
      }
    );

    document
      .querySelectorAll('[data-animate]')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

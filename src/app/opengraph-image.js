import { ImageResponse } from 'next/og';

export const size        = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, #1E3A5F 0%, #1E40AF 60%, #2563EB 100%)',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Subtle circle decoration — top right */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          display: 'flex',
        }} />

        {/* Cross icon */}
        <div style={{ display: 'flex', marginBottom: 28 }}>
          <svg width="52" height="52" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7" fill="rgba(255,255,255,0.12)" />
            <rect x="13" y="4" width="6" height="24" rx="2" fill="#ffffff" />
            <rect x="4" y="10" width="24" height="6" rx="2" fill="#ffffff" />
            <circle cx="16" cy="13" r="2.8" fill="#D4AE50" />
          </svg>
        </div>

        {/* Ministry label */}
        <p style={{
          fontSize: 16,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          margin: '0 0 16px',
          display: 'flex',
        }}>
          Pastor Kofi · Ministry
        </p>

        {/* Main title */}
        <h1 style={{
          fontSize: 80,
          fontWeight: 400,
          color: '#ffffff',
          margin: '0 0 20px',
          lineHeight: 1.1,
          textAlign: 'center',
          display: 'flex',
        }}>
          Healing Prayer
        </h1>

        {/* Gold divider */}
        <div style={{
          width: 64,
          height: 2,
          background: '#D4AE50',
          marginBottom: 28,
          display: 'flex',
        }} />

        {/* Tagline */}
        <p style={{
          fontSize: 26,
          color: 'rgba(255,255,255,0.8)',
          margin: '0 0 12px',
          textAlign: 'center',
          fontStyle: 'italic',
          display: 'flex',
        }}>
          "He Heals the Broken-Hearted"
        </p>

        {/* Scripture ref */}
        <p style={{
          fontSize: 16,
          color: '#D4AE50',
          letterSpacing: '0.08em',
          margin: 0,
          display: 'flex',
        }}>
          Psalm 147:3
        </p>
      </div>
    ),
    { ...size }
  );
}

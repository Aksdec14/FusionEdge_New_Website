'use client'


export default function ClickDontPrint() {



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        *,*::before,*::after { box-sizing: border-box; }

        .cdp-outer {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          padding: 20px 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          width: 100%;
        }

        .cdp-card {
          background-color: #f8f6f3;
          background-image: url('/trees.png');
          background-repeat: no-repeat;
          background-position: bottom right;
          background-size: 55% auto;
          padding: 24px 32px;
          width: 100%;
          max-width: 1200px;
          border-radius: 20px;
          box-shadow: 0 4px 40px rgba(0,0,0,0.07);
          position: relative;
          overflow: hidden;
        }

        .cdp-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(248, 246, 243, 0.72);
          pointer-events: none;
          border-radius: 20px;
        }

        .cdp-card > * {
          position: relative;
          z-index: 1;
        }

        /* ── Logo ── */
        .cdp-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .cdp-logo img {
          height: 64px;
          object-fit: contain;
          width: auto;
          max-width: 100%;
        }

        /* ── Headline row: heading LEFT, tagline RIGHT ── */
        .cdp-body {
          display: flex;
          gap: 32px;
          align-items: center;
          margin-bottom: 18px;
        }

        .cdp-left {
          flex: 1;
          min-width: 0;
        }

        .cdp-heading {
          font-size: clamp(32px, 6vw, 66px);
          line-height: 1.0;
          font-weight: 900;
          letter-spacing: -2px;
          margin: 0;
        }

        .cdp-right {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cdp-tagline {
          font-size: clamp(13px, 1.5vw, 15px);
          color: #444;
          margin: 0;
          line-height: 1.6;
        }

        .cdp-wed {
          font-size: clamp(12px, 1.4vw, 14px);
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        /* ── Stats ── */
        .cdp-stats {
          background: rgba(232, 226, 214, 0.85);
          backdrop-filter: blur(2px);
          border-radius: 12px;
          padding: 14px 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }
        .cdp-stat { display: flex; flex-direction: column; gap: 3px; }
        .stat-icon { font-size: 16px; }
        .stat-num {
          font-size: clamp(15px, 2vw, 20px);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.1;
        }
        .stat-label {
          font-size: clamp(10px, 1.1vw, 12px);
          color: #666;
          line-height: 1.35;
        }

        /* ── CTA strip ── */
        .cdp-cta-strip {
          background: rgba(217, 208, 240, 0.9);
          backdrop-filter: blur(2px);
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }
        .cdp-cta-left {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
          min-width: 0;
        }
        .cta-num {
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 900;
          color: #5B2ECC;
          line-height: 1;
          flex-shrink: 0;
        }
        .cta-text {
          font-size: clamp(12px, 1.5vw, 15px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.35;
          min-width: 0;
        }
        .cdp-btn {
          background: #5B2ECC;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 11px 24px;
          font-size: clamp(12px, 1.3vw, 14px);
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          font-family: inherit;
          flex-shrink: 0;
          transition: opacity 0.15s;
        }
        .cdp-btn:hover { opacity: 0.88; }

        /* ── Trust line ── */
        .cdp-trust {
          text-align: center;
          font-size: clamp(10px, 1vw, 11px);
          color: #666;
          margin-bottom: 14px;
          line-height: 1.9;
        }

        /* ── Bottom row ── */
        .cdp-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
        }
        .cdp-dates { display: flex; flex-direction: column; gap: 2px; }
        .date-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #888;
          text-transform: uppercase;
        }
        .date-range {
          font-size: clamp(15px, 1.8vw, 22px);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.1;
        }

        /* ── LG 900–1199px ── */
        @media (max-width: 1199px) {
          .cdp-card { max-width: 960px; padding: 22px 28px; }
        }

        /* ── MD tablet 601–899px ── */
        @media (max-width: 899px) {
          .cdp-card {
            padding: 20px 22px;
            border-radius: 16px;
            background-size: 70% auto;
          }
          .cdp-logo img { height: 38px; }
          .cdp-heading { letter-spacing: -1.5px; }
          .cdp-stats { grid-template-columns: repeat(2, 1fr); gap: 10px 16px; }
          .cdp-body { gap: 20px; }
        }

        /* ── SM large mobile 481–600px ── */
        @media (max-width: 600px) {
          .cdp-outer { padding: 16px 12px; }
          .cdp-card {
            padding: 18px 16px;
            border-radius: 14px;
            background-size: 80% auto;
            background-position: bottom center;
          }
          .cdp-logo img { height: 32px; }
          .cdp-logo { margin-bottom: 14px; }
          .cdp-body {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 14px;
          }
          .cdp-right { gap: 6px; }
          .cdp-heading {
            font-size: clamp(28px, 8vw, 38px);
            letter-spacing: -1px;
          }
          .cdp-heading div { display: inline; }
          .cdp-heading div:first-child::after { content: ' '; }
          .cdp-stats {
            grid-template-columns: repeat(2, 1fr);
            padding: 12px 14px;
            gap: 10px 12px;
            margin-bottom: 12px;
          }
          .cdp-cta-strip { padding: 12px 14px; margin-bottom: 8px; }
          .cta-text { font-size: 13px; }
          .cdp-trust { margin-bottom: 12px; }
          .cdp-bottom { gap: 10px; }
        }

        /* ── XS small mobile ≤480px ── */
        @media (max-width: 480px) {
          .cdp-outer { padding: 12px 10px; }
          .cdp-card {
            padding: 16px 14px;
            border-radius: 12px;
            background-size: 100% auto;
            background-position: bottom center;
          }
          .cdp-heading {
            font-size: clamp(24px, 8.5vw, 34px);
            letter-spacing: -0.5px;
          }
          .cdp-heading div { display: inline; }
          .cdp-heading div:first-child::after { content: ' '; }
          .cdp-body {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 14px;
          }
          .cdp-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            padding: 12px;
          }
          .cdp-cta-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 14px;
          }
          .cdp-btn {
            width: 100%;
            text-align: center;
            padding: 12px;
            font-size: 14px;
          }
          .cdp-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <div className="cdp-outer">
        <section className="cdp-card">

          {/* Logo */}
          <div className="cdp-logo">
            <img src="/FusionEdge_logo.png" alt="FusionEdge" />
          </div>

          {/* Heading LEFT — Tagline RIGHT */}
          <div className="cdp-body">
            <div className="cdp-left">
              <h1 className="cdp-heading">
                <div style={{ color: '#1a1a1a' }}>#Click</div>
                <div>
                  <span style={{ color: '#5B2ECC' }}>Don&apos;t</span>{' '}
                  <span style={{ color: '#2EC060' }}>Print</span>
                </div>
              </h1>
            </div>

            <div className="cdp-right">
              <p className="cdp-tagline">
                The planet doesn&apos;t need your printouts.{' '}
                <strong style={{ color: '#1a1a1a' }}>Your business doesn&apos;t either.</strong>
              </p>
              <p className="cdp-wed">World Environment Day • June 15, 2026</p>
            </div>
          </div>

          {/* Stats */}
          <div className="cdp-stats">
            {[
              { icon: '🌳', num: '60', label: 'Trees saved\nper 100 companies' },
              { icon: '📋', num: '500K', label: 'Printed sheets\neliminated' },
              { icon: '⏱', num: '8 hrs', label: 'Saved per team\nevery week' },
              { icon: '🏢', num: 'F1000', label: 'Fortune 1000\ntrusted platform' },
            ].map((s, i) => (
              <div key={i} className="cdp-stat">
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Strip */}
          <div className="cdp-cta-strip">
            <div className="cdp-cta-left">
              <span className="cta-num">100</span>
              <span className="cta-text">
                Companies Get Free 3-Month<br />Digital Checklist Access
              </span>
            </div>
            <a
              href="https://digitalchecklist.fusionedge.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cdp-btn">
                Apply now
              </button>
            </a>
          </div>

          {/* Trust */}
          <p className="cdp-trust">
            Enterprise-grade · <strong style={{ color: '#1a1a1a' }}>No credit card</strong> · No credit card · No strings attached
            <br />
            <strong style={{ color: '#1a1a1a' }}>Enterprise</strong>-grade · <strong style={{ color: '#1a1a1a' }}>No credit card</strong> · No strings attached
          </p>

          {/* Bottom */}
          <div className="cdp-bottom">
            <div className="cdp-dates">
              <span className="date-label">Applications Open Now</span>
              <span className="date-range">June 1 – June 15, 2026</span>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}
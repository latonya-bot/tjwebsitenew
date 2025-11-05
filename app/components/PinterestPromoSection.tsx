"use client";

export default function PinterestPromoSection() {
  return (
    <section
      className="relative"
      style={{
        backgroundColor: '#d97543',
        marginTop: 0,
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 3vw, 24px)'
        }}
      >
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(18px, 4vw, 48px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column - Mockup Stack */}
          <div className="relative" style={{ height: '480px' }}>
            {/* Back white sheet - benefits */}
            <div
              className="absolute"
              style={{
                width: 'clamp(320px, 85%, 380px)',
                height: '440px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                transform: 'rotate(-6deg)',
                left: '20px',
                top: '20px',
                zIndex: 1,
                boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                padding: '32px 28px'
              }}
            >
              <div style={{ fontSize: '14px', color: '#2b4a73', fontWeight: 600, marginBottom: '16px' }}>
                WHAT'S INSIDE:
              </div>
              <div style={{ fontSize: '13px', color: '#173256', lineHeight: 1.8 }}>
                ✓ Pinterest 101 basics<br/>
                ✓ Pin creation secrets<br/>
                ✓ SEO optimization<br/>
                ✓ Analytics that matter<br/>
                ✓ Traffic strategies<br/>
                ✓ Monetization tips
              </div>
            </div>

            {/* Blue sheet behind with handwriting */}
            <div
              className="absolute"
              style={{
                width: 'clamp(320px, 85%, 380px)',
                height: '440px',
                backgroundColor: '#2b4a73',
                borderRadius: '8px',
                transform: 'rotate(8deg)',
                right: '40px',
                top: '10px',
                zIndex: 2,
                boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
                overflow: 'hidden'
              }}
            >
              {/* "one of my faves" handwriting */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  color: 'rgba(255,255,255,0.95)',
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontFamily: 'cursive',
                  fontStyle: 'italic',
                  transform: 'rotate(-8deg)',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                one of my faves
              </div>
            </div>

            {/* Front book cover */}
            <div
              className="absolute"
              style={{
                width: 'clamp(240px, 70%, 300px)',
                height: '420px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '8px solid white',
                transform: 'rotate(1deg)',
                left: '50%',
                top: '50%',
                marginLeft: 'clamp(-120px, -35%, -150px)',
                marginTop: '-210px',
                zIndex: 3,
                boxShadow: '0 24px 40px rgba(0,0,0,0.22)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px 24px'
              }}
            >
              {/* Pinterest icon placeholder */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#E60023',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  fontSize: '48px',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                P
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(24px, 3.2vw, 32px)',
                  color: '#173256',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                The Ultimate<br/>Guide to<br/>Pinterest
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#6e75aa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 700
                }}
              >
                Free Download
              </div>
            </div>
          </div>

          {/* Right Column - Copy + CTA */}
          <div className="relative">
            {/* Asterisk icon */}
            <div
              className="absolute"
              style={{
                top: '-12px',
                right: '0',
                fontSize: '28px',
                color: 'rgba(244,239,255,0.85)'
              }}
            >
              ✱
            </div>

            {/* Headline */}
            <h2 style={{ marginBottom: '14px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 4.6vw, 3.4rem)',
                  color: 'rgba(255,255,255,0.96)',
                  lineHeight: 1.08,
                  fontWeight: 500
                }}
              >
                YOUR ULTIMATE<br/>
                GUIDE TO
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: 'clamp(2rem, 5.2vw, 3.8rem)',
                  color: '#ffffff',
                  lineHeight: 1.0,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em'
                }}
              >
                PINTEREST
              </div>
            </h2>

            {/* Subcopy */}
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(0.95rem, 1.1vw, 1.06rem)',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '40ch',
                lineHeight: 1.7,
                marginBottom: '20px',
                fontWeight: 500
              }}
            >
              Everything you need to make the most powerful platform in my business go to work for you.
            </p>

            {/* CTA Button */}
            <button
              className="transition-all duration-200"
              style={{
                padding: '14px 24px',
                backgroundColor: '#6e75aa',
                color: 'white',
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderRadius: '999px',
                border: 'none',
                boxShadow: '0 10px 20px rgba(0,0,0,0.22)',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.22)';
              }}
              aria-label="Download the Pinterest Guide"
            >
              Gimme That Guide
            </button>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 860px) {
          .grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .relative h2 {
            text-align: center;
          }
          .relative p {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            max-width: 46ch !important;
          }
          .relative button {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 480px) {
          .relative button {
            width: 100%;
            min-width: 260px;
          }
        }
      `}</style>
    </section>
  );
}

